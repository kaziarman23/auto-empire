"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import {
  useDemoteUserRoleMutation,
  useGetUsersQuery,
  usePromoteUserRoleMutation,
} from "../../redux/api/usersApi";
import useToast from "../../components/Shared/useCustomToast";
import Loading from "@/app/loading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Page() {
  // states
  const { showSuccess, showError } = useToast();

  // rtk Query
  const {
    data: usersData,
    isLoading,
    error,
    isError,
    refetch,
  } = useGetUsersQuery();
  const [promoteUserRole] = usePromoteUserRoleMutation();
  const [demoteUserRole] = useDemoteUserRoleMutation();

  // handle loading
  if (isLoading) {
    return <Loading message="Loading Orders data..." />;
  }

  // handle error
  if (isError) {
    console.log(error.message || "something went wrong!");
    return error;
  }

  // handle empty data
  if (!usersData) {
    return (
      <div>
        <h1>No user Found!</h1>
      </div>
    );
  }

  // handle promotion
  const handlePromote = (id) => {
    promoteUserRole({ _id: id })
      .unwrap()
      .then((res) => {
        if (res && res.userRole === "admin") {
          showSuccess("User promoted to admin!");
        } else {
          showError("User promotion failed!");
        }
      })
      .catch(() => {
        showError("Something went wrong. Please try again!");
      })
      .finally(() => refetch());
  };

  // handle demotion
  const handleDemote = (id) => {
    demoteUserRole({ _id: id })
      .unwrap()
      .then((res) => {
        if (res && res.userRole === "user") {
          showSuccess("User demoted to regular user!");
        } else {
          showError("User demotion failed!");
        }
      })
      .catch(() => {
        showError("Something went wrong. Please try again!");
      })
      .finally(() => refetch());
  };

  return (
    <div className="p-5">
      <div className="w-full">
        <table className="w-full table-auto border-collapse">
          <thead className="sticky top-0 z-10 bg-muted text-center">
            <tr>
              <th className="p-4">Profile</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="bg-black text-center text-white">
            {usersData.map((user, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="p-4">
                  <div className="mx-auto flex items-center justify-center">
                    <Image
                      src={user.userPhoto}
                      width={80}
                      height={80}
                      alt="user image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </td>
                <td className="p-4 text-center">{user.userName}</td>
                <td className="p-4 text-center">{user.userEmail}</td>
                <td className="p-4 text-center capitalize">{user.userRole}</td>
                <td className="p-4">
                  {user.userRole === "user" ? (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="success">Promote to Admin</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            promote the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              handlePromote(`${user._id}`);
                            }}
                          >
                            Promote
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Demote to User</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            demote the user.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => {
                              handleDemote(`${user._id}`);
                            }}
                          >
                            Demote
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;


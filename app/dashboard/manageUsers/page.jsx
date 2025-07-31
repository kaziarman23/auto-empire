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
    <div className="max-w-screen overflow-x-auto p-4">
      <div className="w-full min-w-[600px] rounded-lg border border-gray-800 shadow">
        <table className="w-full table-auto border-collapse text-sm sm:text-base">
          <thead className="sticky top-0 z-10 bg-muted text-center">
            <tr>
              <th className="whitespace-nowrap p-3">Profile</th>
              <th className="whitespace-nowrap p-3">Name</th>
              <th className="whitespace-nowrap p-3">Email</th>
              <th className="whitespace-nowrap p-3">Role</th>
              <th className="whitespace-nowrap p-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-black text-center text-white">
            {usersData.map((user, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="p-3">
                  <div className="mx-auto flex items-center justify-center">
                    <Image
                      src={user.userPhoto}
                      width={50}
                      height={50}
                      alt="user image"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </td>
                <td className="p-3">{user.userName}</td>
                <td className="max-w-[200px] break-words p-3">
                  {user.userEmail}
                </td>
                <td className="p-3 capitalize">{user.userRole}</td>
                <td className="p-3">
                  {user.userRole === "user" ? (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="success"
                          className="whitespace-nowrap text-xs sm:text-sm"
                        >
                          Promote to Admin
                        </Button>
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
                            onClick={() => handlePromote(user._id)}
                          >
                            Promote
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          className="whitespace-nowrap text-xs sm:text-sm"
                        >
                          Demote to User
                        </Button>
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
                            onClick={() => handleDemote(user._id)}
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
      <p className="mt-2 text-center text-sm text-gray-400 sm:hidden">
        Scroll right to see more →
      </p>
    </div>
  );
}

export default Page;

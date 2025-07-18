"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import {
  useDemoteUserRoleMutation,
  useGetUsersQuery,
  usePromoteUserRoleMutation,
} from "../../redux/api/usersApi";
import useToast from "../../components/Shared/useCustomToast";

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
    return (
      <div>
        <h1>Loading users...</h1>
      </div>
    );
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
                    <Button
                      variant="success"
                      onClick={() => {
                        handlePromote(`${user._id}`);
                      }}
                    >
                      Promote to Admin
                    </Button>
                  ) : (
                    <Button
                      variant="destructive"
                      onClick={() => {
                        handleDemote(`${user._id}`);
                      }}
                    >
                      Demote to User
                    </Button>
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

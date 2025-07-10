"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import Loading from "../../loading";
import { useGetUsersQuery } from "../../redux/api/usersApi";

function ProfilePage() {
  const currentUser = useSelector((state) => state.user);
  const { data: userData, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <Loading />;
  if (isError)
    return <p>Error: {error?.message || "Failed to load user data."}</p>;

  if (!currentUser?.userEmail) return <p>Loading user...</p>;

  console.log("currentUser:", currentUser);
  console.log("userData:", userData);

  const usersArray = Array.isArray(userData) ? userData : userData?.users;

  const user = usersArray?.find(
    (user) =>
      user.userEmail?.toLowerCase().trim() ===
      currentUser.userEmail?.toLowerCase().trim(),
  );

  if (!user) return <p>User not found.</p>;

  return (
    <div className="mt-10 flex justify-center">
      <div className="flex max-w-sm items-center space-x-6 rounded-2xl bg-white p-6 shadow-lg">
        {user.userPhoto && (
          <Image
            className="h-20 w-20 rounded-full object-cover"
            src={user.userPhoto}
            alt={`${user.userName}'s profile`}
            width={80}
            height={80}
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {user.userName}
          </h2>
          <p className="text-sm text-gray-500">{user.userEmail}</p>
          <span className="mt-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-xs text-white">
            {user.userRole}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import Loading from "@/app/loading";
import { useGetUsersQuery } from "../../redux/api/usersApi";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

function ProfilePage() {
  const currentUser = useSelector((state) => state.user);
  const { data: userData, isLoading, isError, error } = useGetUsersQuery();

  if (isLoading) return <Loading message="Loading User Data..." />;
  if (isError)
    return <p>Error: {error?.message || "Failed to load user data."}</p>;

  if (!currentUser?.userEmail)
    return <Loading message="Loading User Data..." />;

  const usersArray = Array.isArray(userData) ? userData : userData?.users;

  const user = usersArray?.find(
    (user) =>
      user.userEmail?.toLowerCase().trim() ===
      currentUser.userEmail?.toLowerCase().trim(),
  );

  if (!user) return <p>User not found.</p>;

  return (
    <div className="mt-10 flex h-full items-center justify-center">
      <div className="h-1/2 w-1/2 space-x-6 rounded-2xl bg-black p-6 shadow-lg">
        <div className="flex h-[85%] w-full items-center justify-evenly">
          {user.userPhoto && (
            <Image
              className="h-20 w-20 rounded-full object-cover"
              src={user.userPhoto}
              alt={`${user.userName}'s profile`}
              width={80}
              height={80}
            />
          )}
          <div className="space-y-3">
            <h2 className="text-xl font-bold capitalize text-white">
              Name: <span className="font-normal">{user.userName}.</span>
            </h2>
            <p className="text-sm font-bold text-white">
              Email: <span className="font-normal">{user.userEmail}</span>
            </p>
            <p className="text-sm font-bold capitalize text-white">
              User Role: <span className="font-normal">{user.userRole}.</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Link href={"/dashboard/updateProfile"}>
            <Button variant="update">Update</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

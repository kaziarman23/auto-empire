"use client";

import Image from "next/image";
import Loading from "@/app/loading";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";

function ProfilePage() {
  const { user, isLoading, isError, error } = useCurrentUser();

  if (isLoading) return <Loading message="Loading User Data..." />;
  if (isError) {
    return <p>Error: {error?.message || "Failed to load user data."}</p>;
  }

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

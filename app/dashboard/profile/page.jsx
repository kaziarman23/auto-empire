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
    <div className="mt-10 flex h-full items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-6 rounded-2xl bg-black p-6 shadow-lg sm:p-8">
        <div className="flex flex-col space-y-6 sm:flex-row sm:items-center sm:justify-evenly sm:space-y-0">
          {user.userPhoto && (
            <div className="flex justify-center">
              <Image
                className="h-24 w-24 rounded-full object-cover"
                src={user.userPhoto}
                alt={`${user.userName}'s profile`}
                width={96}
                height={96}
              />
            </div>
          )}
          <div className="space-y-3 text-center sm:text-left">
            <h2 className="text-xl font-bold capitalize text-white">
              Name: <span className="font-normal">{user.userName}</span>
            </h2>
            <p className="text-sm font-bold text-white">
              Email: <span className="font-normal">{user.userEmail}</span>
            </p>
            <p className="text-sm font-bold capitalize text-white">
              User Role: <span className="font-normal">{user.userRole}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <Link href="/dashboard/updateProfile">
            <Button variant="update">Update</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

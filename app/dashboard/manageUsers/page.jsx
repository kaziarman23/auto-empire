"use client";

import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { users } from "./test.js";

function Page() {
  const handlePromote = () => {};

  const handleDemote = () => {};

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
            {users.map((user, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="p-4">
                  <div className="mx-auto flex items-center justify-center">
                    <Image
                      src={user.image}
                      width={80}
                      height={80}
                      alt="Avatar image"
                      className="rounded-xl object-cover"
                    />
                  </div>
                </td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4 capitalize">{user.role}</td>
                <td className="p-4">
                  {user.role === "user" ? (
                    <Button variant="success" onClick={handlePromote}>
                      Promote to Admin
                    </Button>
                  ) : (
                    <Button variant="destructive" onClick={handleDemote}>
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

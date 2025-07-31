"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/ui/button";
import { useUpdateUserProfileMutation } from "../../redux/api/usersApi";
import useToast from "../../components/Shared/useCustomToast";
import { useRouter } from "next/navigation";
import { setUser } from "../../redux/slices/userSlice";

function UpdateProfile() {
  // states
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const { showSuccess, showError } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: currentUser?.userName || "",
    userPhoto: currentUser?.userPhoto || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      userEmail: currentUser.userEmail,
      ...formData,
    };

    try {
      // updating user data in database
      const updatedUser = await updateUserProfile(userInfo).unwrap();

      // updating user data in redux store
      dispatch(setUser(updatedUser));

      // showing notification and navigating the user
      showSuccess("Profile Updated Successfully");
      router.push("/dashboard/profile");
    } catch (error) {
      // showing notification and navigating the user
      console.error("Update error:", error);
      showError("Something went wrong!");
      router.push("/dashboard/profile");
    }
  };

  const handleCancel = () => {
    router.push("/dashboard/profile");
  };

  return (
    <div className="mt-10 flex h-full items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 rounded-2xl bg-black p-6 text-white shadow-lg sm:p-8"
      >
        <h2 className="text-center text-2xl font-bold">Update Profile</h2>

        <div>
          <label
            className="mb-1 block text-sm font-semibold text-muted-foreground"
            htmlFor="userName"
          >
            Name
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            value={formData.userName}
            onChange={handleChange}
            className="w-full rounded-lg p-2 text-white"
            required
          />
        </div>

        <div>
          <label
            className="mb-1 block text-sm font-semibold text-muted-foreground"
            htmlFor="userPhoto"
          >
            Photo URL
          </label>
          <input
            id="userPhoto"
            name="userPhoto"
            type="text"
            value={formData.userPhoto}
            onChange={handleChange}
            className="w-full rounded-lg p-2 text-white"
          />
        </div>

        <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
          <Button type="button" variant="destructive" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;

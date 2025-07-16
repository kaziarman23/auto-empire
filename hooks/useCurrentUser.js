"use client";

import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../app/redux/api/usersApi";

const useCurrentUser = () => {
  const currentUser = useSelector((state) => state.user);
  const { data: userInfo, isLoading, isError, error } = useGetUsersQuery();

  const usersArray = Array.isArray(userInfo) ? userInfo : userInfo?.users;

  const matchedUser = usersArray?.find(
    (user) =>
      user.userEmail?.toLowerCase().trim() ===
      currentUser?.userEmail?.toLowerCase().trim(),
  );

  return {
    user: matchedUser,
    isLoading: isLoading || !currentUser?.userEmail,
    isError,
    error,
  };
};

export default useCurrentUser;

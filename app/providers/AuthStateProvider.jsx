"use client";

import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { logoutUser, setUser, toggleLoading } from "../redux/slices/userSlice";
import Loading from "../loading";

const AuthStateProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if the user is available then dispatch will update the user
      // or else it will just update the loading state false because initialy we have been set the isLoading true and clearing the user data

      if (currentUser) {
        console.log("current user:", currentUser);
        dispatch(
          setUser({
            userName: currentUser.displayName,
            userPhoto: currentUser.photoURL,
            userEmail: currentUser.email,
          }),
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(logoutUser());
        dispatch(toggleLoading(false));
      }
    });

    return () => unSubscribe();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AuthStateProvider;

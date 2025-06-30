"use client";

import auth from "../firebase/firebase.config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { logoutUser, setUser, toggleLoading } from "../redux/slices/userSlice";

const AuthStateProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoading(true));
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
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

  return <>{children}</>;
};

export default AuthStateProvider;

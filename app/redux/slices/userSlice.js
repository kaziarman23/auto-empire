import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";

// provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const initialState = {
  userName: "",
  userEmail: "",
  userPhoto: "",
  isLoading: true,
  isError: false,
  error: "",
};

// creating user with email
export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ userName, userPhoto, userEmail, userPassword }) => {
    const data = await createUserWithEmailAndPassword(
      auth,
      userEmail,
      userPassword,
    );

    const photo =
      userPhoto ||
      "https://i.pinimg.com/736x/90/d0/ad/90d0ad3daae6db158d099f7a6723ec3f.jpg";

    await updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photo,
    });

    const updatedUser = auth.currentUser;

    return {
      userName: updatedUser.displayName,
      userEmail: updatedUser.email,
      userPhoto: updatedUser.photoURL,
    };
  },
);

// login user with email
export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ userEmail, userPassword }) => {
    const data = await signInWithEmailAndPassword(
      auth,
      userEmail,
      userPassword,
    );
    return {
      userName: data.user.displayName,
      userEmail: data.user.email,
      userPhoto: data.user.photoURL,
    };
  },
);

// creating user with google
export const googleSignIn = createAsyncThunk(
  "userSlice/googleSignIn",
  async () => {
    const data = await signInWithPopup(auth, googleProvider);

    return {
      userName: data.user.displayName,
      userEmail: data.user.email,
      userPhoto: data.user.photoURL,
      userIsVerified: data.user.emailVerified,
    };
  },
);

// creating user with github
export const githubSignIn = createAsyncThunk(
  "userSlice/githubSignIn",
  async () => {
    const data = await signInWithPopup(auth, githubProvider);

    return {
      userName: data.user.displayName,
      userEmail: data.user.email,
      userPhoto: data.user.photoURL,
      userIsVerified: data.user.emailVerified,
    };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.userName = payload.userName;
      state.userEmail = payload.userEmail;
      state.userPhoto = payload.userPhoto;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logoutUser: (state) => {
      state.userName = "";
      state.userEmail = "";
      state.userPhoto = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.userName = payload.userName;
        state.userEmail = payload.userEmail;
        state.userPhoto = payload.userPhoto;
        state.isLoading = false;
        state.isError = false;
        state.error = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      }) // google singIn
      .addCase(googleSignIn.pending, (state) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        state.userName = payload.userName;
        state.userEmail = payload.userEmail;
        state.userPhoto = payload.userPhoto;
        state.isLoading = false;
        state.isError = false;
        state.error = false;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      }) // github singIn
      .addCase(githubSignIn.pending, (state) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(githubSignIn.fulfilled, (state, { payload }) => {
        state.userName = payload.userName;
        state.userEmail = payload.userEmail;
        state.userPhoto = payload.userPhoto;
        state.isLoading = false;
        state.isError = false;
        state.error = false;
      })
      .addCase(githubSignIn.rejected, (state, action) => {
        state.userName = "";
        state.userEmail = "";
        state.userPhoto = "";
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { setUser, logoutUser, toggleLoading } = userSlice.actions;
export default userSlice.reducer;

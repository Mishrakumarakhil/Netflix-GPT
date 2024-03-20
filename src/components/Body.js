import React, { useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is  SignIn
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        // navigate("/browse");
      } else {
        //User is SignOut
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

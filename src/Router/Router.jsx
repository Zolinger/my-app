import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import firebase from "firebase";
import { BrowserRouter, Routes, Link, Navigate, Route } from "react-router-dom";
import { Main } from "../Screen/Main";
import { Profile } from "../Screen/Profile";
import { ROUTES } from "./constants";
import { Chats } from "../Screen/Chats/Chats";
import { SignIn } from "../Screen/SignIn";
import { SignUp } from "../Screen/SignUp";
import { Chuck } from "../Screen/Chuck/chuck";
import { PrivateRoute } from "../Components/PrivateRoute";

export const Router = () => {
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <BrowserRouter>
      <header>
        <ul>
          <li>
            <Link to={ROUTES.MAIN}>Main</Link>
          </li>
          <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
          </li>
          <li>
            <Link to={ROUTES.CHATS}>Chats</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign in</Link>
          </li>
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </li>
          <li>
            <Link to={ROUTES.CHUCK}>Chuck Norris</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.PROFILE} element={<PrivateRoute />}>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Route>
        <Route auth={auth} element={<PrivateRoute />}>
          <Route path={ROUTES.CHATS} element={<Chats />} />
        </Route>
        <Route path={ROUTES.SIGN_IN} auth={auth} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} auth={auth} element={<SignUp />} />
        <Route path={ROUTES.CHUCK} element={<Chuck />} />
        <Route path={ROUTES.NO_CHAT} auth={auth}>
          No chat content
        </Route>
        <Route element={<Navigate to={ROUTES.NOT_FOUND} auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
};

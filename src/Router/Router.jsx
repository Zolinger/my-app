import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { Main } from "../Screen/Main";
import { Profile } from "../Screen/Profile";
import { ROUTES } from "./constants";
import { Chats } from "../Screen/Chats/Chats";

export const Router = () => {
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
        </ul>
      </header>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.CHATS} element={<Chats />} />
        <Route path={ROUTES.NO_CHAT}>No chat content</Route>
        <Route element={<Navigate to={ROUTES.NOT_FOUND} />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import MainPage from '../pages/MainPage'
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";

import UserDetailsPage from "../pages/UserDetailsPage";
import Users from "../users/Users";
import HelloWorld from '../pages/HelloWorld';


function AppRouter(props) {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/hello' element={<HelloWorld/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    );
}

export default AppRouter;
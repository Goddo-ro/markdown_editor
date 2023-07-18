import {Navigate} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export const publicRoutes = [
  { path: "/login", element: <Login/> },
  { path: "/register", element: <SignUp/> },
  { path: "*", element: <Navigate replace to="/login"/> },
];

export const privateRoutes = [
  { path: "/", element: <Home/> },
  { path: "*", element: <Navigate replace to="/" /> },
]
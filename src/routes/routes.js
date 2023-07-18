import {Navigate} from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const publicRoutes = [
  { path: "/login", element: <Login/> },
  { path: "/register", element: <SignUp/> },
  { path: "*", element: <Navigate replace to="/login"/> },
];
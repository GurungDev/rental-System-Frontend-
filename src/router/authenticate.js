import { Outlet } from "react-router-dom";
import { Login, Register } from "../pages/pages";

export const authenticateRoute = {
  element: <Outlet />,
  children: [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ],
};

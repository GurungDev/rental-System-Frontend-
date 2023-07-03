import { Outlet, redirect } from "react-router-dom";
import { Login, Register, ErrorPage } from "../pages/pages";
import { store } from "../redux/store";

const state = store.getState();
export const authenticateRoute = {
  element: <Outlet />,
  loader: () => {
    if (state?.user.loginStatus) {
      if (state?.user.isAdmin) {
        return redirect("/admin");
      }
      return redirect("/");
    }
    return null;
  },
  children: [
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "*", element: <ErrorPage /> },
  ],
};

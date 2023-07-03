import { Outlet, redirect } from "react-router-dom";
import { Footer } from "../component/component";
import { Profile, RentDetails } from "../pages/pages";
import { store } from "../redux/store";

const state = store.getState();

export const AuthRoutes = {
  element: (
    <>
      <Outlet />
      <Footer />
    </>
  ),
  loader: () => {
    if (!state?.user.loginStatus) {
      return redirect("/login");
    } else if (state?.user.isAdmin) {
      return redirect("/admin");
    } else {
      return null;
    }
  },
  children: [
    { path: "/rentForm/:id", element: <RentDetails /> },
    { path: "/profile", element: <Profile /> },
  ],
};

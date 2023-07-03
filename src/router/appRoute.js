import { Outlet, redirect } from "react-router-dom";
import { Footer } from "../component/component";
import { AboutUs, HomePage, Profile, RentPage } from "../pages/pages";
import { store } from "../redux/store";

const state = store.getState();

export const AppRoutes = {
  element: (
    <>
      <Outlet />
      <Footer />
    </>
  ),
  loader: () => {
    if (state?.user.loginStatus) {
      if (state?.user.isAdmin) {
        return redirect("/admin");
      }
      return null;
    }
    return null;
  },
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/rent/:name", element: <RentPage /> },
  ],
};

import { Outlet } from "react-router-dom";
import { Footer } from "../component/component";
import { AboutUs, HomePage, RentDetails, RentPage } from "../pages/pages";

export const AppRoutes = {
  element: (
    <>
      <Outlet />
      <Footer />
    </>
  ),
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/rent/:name", element: <RentPage /> },
    { path: "/rentForm/:id", element: <RentDetails /> },
  ],
};

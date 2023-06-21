import { Outlet } from "react-router-dom";
import { Header, Footer } from "../component/component";

export const AuthRoutes = {
  element: (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
  children: [{ path: "/auth", element: <></> }],
};

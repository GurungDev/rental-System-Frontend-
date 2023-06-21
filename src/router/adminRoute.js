import { Outlet } from "react-router";
import { Dashboard, Listing, Customer, Payments } from "../auth/admin-pages";
import { Navbar } from "../component/component";

export const AdminRoute = {
  element: (
    <>
      <Navbar setIsSidebar="true" />
      <Outlet />
    </>
  ),
  children: [
    { path: "/admin", element: <Dashboard /> },
    { path: "/listing", element: <Listing /> },
    { path: "/customer", element: <Customer /> },
    { path: "/payments", element: <Payments /> },
  ],
};

import { Outlet, redirect } from "react-router-dom";
import { Dashboard, Listing, Customer, Payments } from "../auth/admin-pages";
import { Navbar } from "../component/component";
import { store } from "../redux/store";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const state = store.getState();
console.log(state.user);
// const persistor = persistStore(store);
// let isAdmin = await getPersistedValue();
// async function getPersistedValue() {
//   await persistor.persist();
//   const serializedState = await storage.getItem("persist:root");
//   if (serializedState) {
//     const parse = JSON.parse(serializedState);
//     const user = JSON.parse(parse.user);
//     return await user?.isAdmin;
//   } else {
//     return 0;
//   }
// }

// const isAdmin = await getPersistedValue();

export const AdminRoute = {
  element: (
    <>
      <Navbar setIsSidebar="true" />
      <Outlet />
    </>
  ),
  loader: () => {
    if (state?.user.loginStatus) {
      if (state?.user.isAdmin) {
        return null;
      }
      return redirect("/");
    }
    return redirect("/");
  },
  children: [
    { path: "/admin", element: <Dashboard /> },
    { path: "/listing", element: <Listing /> },
    { path: "/users", element: <Customer /> },
    { path: "/payments", element: <Payments /> },
  ],
};

import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./appRoute";
import { AuthRoutes } from "./authRoute";
import { authenticateRoute } from "./authenticate";
import { AdminRoute } from "./adminRoute";

const allRouter = createBrowserRouter([
  { ...AppRoutes },
  { ...AuthRoutes },
  { ...authenticateRoute },
  { ...AdminRoute },
]);

export default allRouter;

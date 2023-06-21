import { RouterProvider } from "react-router-dom";
import allRouter from "./router/routes";
import "./styles.css";

function App() {
  return <RouterProvider router={allRouter} />;
}

export default App;

import { RouterProvider } from "react-router-dom";
import allRouter from "./router/routes";
import "./styles.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={allRouter} />
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
      </Provider>
    </>
  );
}

export default App;

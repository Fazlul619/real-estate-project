import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/card/:id",
        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("../../Resident.json"),
      },
    ],
  },
]);

export default router;

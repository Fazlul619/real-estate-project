import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/User Profile/UserProfile";
import UpdateProfile from "../pages/Update Profile/UpdateProfile";
import ErrorPage from "../pages/Error Page/ErrorPage";
import ContactUs from "../pages/Contact Us/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/userProfile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contactUs",
        element: (
          <PrivateRoutes>
            <ContactUs></ContactUs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

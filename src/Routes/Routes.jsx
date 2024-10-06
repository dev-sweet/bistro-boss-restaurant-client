import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Orders from "../Layoutes/Orders/Orders/Orders";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layoutes/DashboardLayout";
import Cart from "../Pages/Dashboard/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/orders/:category",
        element: <Orders />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

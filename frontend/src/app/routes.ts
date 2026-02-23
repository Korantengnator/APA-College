import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: AboutUs,
  },
  {
    path: "/contact",
    Component: ContactUs,
  },
]);

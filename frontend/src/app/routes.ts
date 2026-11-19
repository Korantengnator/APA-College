import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";

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
  { path: "/services/exam-preparation", Component: ServicePage },
  { path: "/services/academic-support", Component: ServicePage },
  { path: "/services/career-counseling", Component: ServicePage },
  { path: "/services/staffing", Component: ServicePage },
  { path: "/blog", Component: BlogPage },
  { path: "/blog/:slug", Component: BlogPostPage },
  { path: "*", Component: NotFound },
]);

import { createBrowserRouter } from "react-router-dom";
import {
  Home1,
  Home2,
  About,
  Contact,
  Projects,
  Team,
  Services,
  ProjectDetails,
  Pricing,
} from "../pages";
import { ErrorPage } from "../components";
import { Default } from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home1 />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/index-2",
        element: <Home2 />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/kontakt",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/o-nas",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/team",
        element: <Team />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/wypozyczalnia-sprzetu",
        element: <Pricing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/uslugi",
        element: <Services />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
        errorElement: <ErrorPage />,
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

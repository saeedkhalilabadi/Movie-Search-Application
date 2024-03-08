
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/errorPage";
import MainLayout from "./layout/mainLayout";
import Search from "./pages/search";
import ShowById from "./pages/showById";
import Favorite from "./pages/favorite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/movie/:imdbID",
        element: <ShowById />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

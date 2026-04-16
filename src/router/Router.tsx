import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "../pages/Main/Main.page";
import ErrorPage from "../pages/Error/Error.page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
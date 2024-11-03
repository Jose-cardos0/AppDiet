import { createBrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages/home";
import { DadosClient } from "./pages/DadosClient";
import { DashBoard } from "./pages/DashBoard";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dados-client",
    element: <DadosClient />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };

import App from "../App";
import { Mall } from "./Mall";
import { Cart } from "./Cart";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mall",
    element: <Mall />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

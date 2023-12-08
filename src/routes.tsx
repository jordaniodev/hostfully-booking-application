import { createBrowserRouter } from "react-router-dom";
import BookingDetail from "./pages/BookingDetail";
import Home from "./pages/Home";
import Filter from "./pages/Filter";

export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/booking",
    element: <BookingDetail />
  },
  {
    path: "/filter",
    element: <Filter />
  }
]);
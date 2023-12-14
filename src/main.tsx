import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes.tsx";
import { BookingsProvider } from "./hooks/Bookings/useBookings.tsx";
import { AlertProvider } from "react-bootstrap-hooks-alert";
import { AlertCustom } from "./components/alerts/AlertAbsolut/AlertAbsolut.style.tsx";
import GlobalStyle from "./globalStyles.ts";
import { HotelsProvider } from "./hooks/Hotels/useHotels.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HotelsProvider>
      <BookingsProvider>
        <GlobalStyle />
        <AlertProvider timeouts={{ warning: 20000, success: 10000 }}>
          <AlertCustom />
          <RouterProvider router={ROUTES} />
        </AlertProvider>
      </BookingsProvider>
    </HotelsProvider>
  </React.StrictMode>
);

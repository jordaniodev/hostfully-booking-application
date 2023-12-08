import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss';
import {RouterProvider } from "react-router-dom";
import { ROUTES } from './routes.tsx';
import { BookingsProvider } from './hooks/Bookings/useBookings.tsx';
import { TravelsProvider } from './hooks/Travells/useTravels.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BookingsProvider>
        <TravelsProvider>
          <RouterProvider router={ROUTES} />
        </TravelsProvider>
      </BookingsProvider>
  </React.StrictMode>,
)

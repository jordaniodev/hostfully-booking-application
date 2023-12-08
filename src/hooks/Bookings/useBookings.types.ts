import { ReactNode } from "react";

export interface Booking {
  id: number;
  amount: number;
  imageUrl: string;
  title: string;
  month: string;
  year: number;
}

export type BookingInput = Omit<Booking, "id" | 'month' | 'year'>;

export interface BookingContextData {
  Bookings: Booking[];
  createBooking: (Booking: BookingInput) => Promise<void>;
  deleteBooking: (idBooking: number) => Promise<void>;
  detailBooking: (idBooking: number) => Promise<Booking>;
  setYear: (year: number) => void;
  setMonth: (month: string) => void;
  year?: number;
  month?: string;
}

export interface BookingProviderProps {
  children: ReactNode;
}

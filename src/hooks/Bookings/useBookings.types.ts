import { ReactNode } from "react";
import { Hotel } from "../Hotels/useHotels.types";

export interface Booking {
  id: number;
  hotelId: number;
  city: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  kids: number;
}

export type BookingInput = Pick<Booking, "hotelId">;
export type BookingFormData = Omit<Booking, "id" | "hotelId">

export interface BookingDetail {
  book: Booking;
  hotel: Hotel
}

export interface BookingContextData {
  Bookings: Booking[];
  createBooking: (Booking: BookingInput) => Promise<void>;
  deleteBooking: (idBooking: number) => Promise<void>;
  detailBooking: (idBooking: number) => Promise<BookingDetail>;
  updateBooking: (idBooking: number, bookingData: Booking) => void;
  setFormData: (formData?: BookingFormData) => void;
  formData?: BookingFormData;
}

export interface BookingProviderProps {
  children: ReactNode;
}

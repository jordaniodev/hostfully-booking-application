import { createContext, useContext, useEffect, useState } from "react";
import {
  Booking,
  BookingContextData,
  BookingInput,
  BookingProviderProps,
} from "./useBookings.types";
import { BOOKINGS } from "./useBookings.data";

const BookingsContext = createContext<BookingContextData>(
  {} as BookingContextData
);

export function BookingsProvider({ children }: BookingProviderProps) {
  const [Bookings, setBookings] = useState<Booking[]>([]);
  const [year, setYear] = useState<number>();
  const [month, setMonth] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setBookings(BOOKINGS);
    }, 500);
  }, []);

  async function createBooking(BookingInput: BookingInput) {
    const Booking = {
      ...BookingInput,
      year,
      month,
      id: Date.now(),
    } as Booking;
    setBookings([...Bookings, Booking]);
    if (year && month) {
      alert("Booking created successfully");

      const reservationElement = document.getElementById('reservation')?.offsetTop;
      window.scrollTo(0, reservationElement!);
    } else {
      alert("You need provider a month and year for your travel");
    }
  }

  async function deleteBooking(idBooking: number) {
    setTimeout(() => {
      const newBookings = Bookings.filter(
        (booking) => booking.id !== idBooking
      );
      setBookings([...newBookings]);
    }, 500);
  }

  async function detailBooking(idBooking: number) {
    return await new Promise<Booking>((resolve) => {
      setTimeout(() => {
        resolve(
          Bookings.find((booking) => booking.id === idBooking) as Booking
        );
      }, 500);
    });
  }

  return (
    <BookingsContext.Provider
      value={{
        Bookings,
        createBooking,
        deleteBooking,
        detailBooking,
        setYear,
        setMonth,
        year,
        month
      }}
    >
      {children}
    </BookingsContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingsContext);
  return context;
}

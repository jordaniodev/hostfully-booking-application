import { createContext, useContext, useEffect, useState } from "react";
import {
  Booking,
  BookingContextData,
  BookingDetail,
  BookingFormData,
  BookingInput,
  BookingProviderProps,
} from "./useBookings.types";
import { BOOKINGS } from "./useBookings.data";
import { useAlert } from 'react-bootstrap-hooks-alert';
import { useHotel } from "../Hotels/useHotels";

const BookingsContext = createContext<BookingContextData>(
  {} as BookingContextData
);

export function BookingsProvider({ children }: BookingProviderProps) {
  const [Bookings, setBookings] = useState<Booking[]>([]);
  const [formData, setFormData] = useState<BookingFormData>();
  const { success, warning } = useAlert();
  const { detailHotel } = useHotel();

  useEffect(() => {
    setTimeout(() => {
      setBookings(BOOKINGS);
    }, 500);
  }, []);

  async function createBooking({hotelId}: BookingInput) {
    if(formData) {
      const Booking = {
        hotelId,
        ...formData,
        id: Date.now(),
      } as Booking;
  
      setBookings([...Bookings, Booking]);

      success('Bookings created successfully');
    }else{
      warning("You need provider a month and year for your travel");
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
    const book =  await new Promise<Booking>((resolve) => {
      setTimeout(() => {
        resolve(
          Bookings.find((booking) => booking.id === idBooking) as Booking
        );
      }, 500);
    });

    const hotel = detailHotel(book.hotelId);

    return {
      hotel,
      book
    } as BookingDetail
  }

  async function updateBooking(idBooking: number, bookingData: Booking) {
    
  }

  return (
    <BookingsContext.Provider
      value={{
        Bookings,
        createBooking,
        deleteBooking,
        detailBooking,
        updateBooking,
        setFormData,
        formData
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

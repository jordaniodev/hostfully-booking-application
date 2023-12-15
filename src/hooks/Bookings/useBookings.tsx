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
import { useAlert } from "react-bootstrap-hooks-alert";
import { useHotel } from "../Hotels/useHotels";

const BookingsContext = createContext<BookingContextData>(
  {} as BookingContextData
);

export function BookingsProvider({ children }: BookingProviderProps) {
  const [formData, setFormData] = useState<BookingFormData>();
  const { warning } = useAlert();
  const { detailHotel } = useHotel();
  const STORAGE_KEY = "HOSTFULLY_BOOKINGS";
  const storageBooking = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}');
  const [Bookings, setBookings] = useState<Booking[]>(storageBooking);


  useEffect(() => {
    if(!Object.keys(storageBooking).length){
       setBookings(BOOKINGS)
       saveStorageBookings(BOOKINGS)
      };
  },[]);

  function saveStorageBookings(bookings: Booking[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }

  function createBooking({ hotelId }: BookingInput) {
    const id = Date.now();

    if (formData) {
      const Booking = {
        hotelId,
        ...formData,
        id,
      } as Booking;
      const newBookings = [...Bookings, Booking];
      setBookings(newBookings);
      saveStorageBookings(newBookings)
    } else {
      warning("You need provider a month and year for your travel");
    }

    return id;
  }

  async function deleteBooking(idBooking: number) {
    setTimeout(() => {
      const newBookings = Bookings.filter(
        (booking) => booking.id !== idBooking
      );
      setBookings([...newBookings]);
      saveStorageBookings([...newBookings])
    }, 500);
  }

  async function detailBooking(idBooking: number) {
    const book = await new Promise<Booking>((resolve) => {
        resolve(
          Bookings.find((booking) => booking.id === idBooking) as Booking
        );
    });
    const hotel = detailHotel(book.hotelId);
    return {
      hotel,
      book,
    } as BookingDetail;
  }

  async function updateBooking(idBooking: number, bookingData: BookingFormData) {
      const newBookings = Bookings.map((booking) => {
        if(booking.id === idBooking){
          return {
            ...booking,
            adults: bookingData.adults,
            kids: bookingData.kids,
            checkIn: bookingData.checkIn,
            checkOut: bookingData.checkOut
          }
        }
        return booking;
      }) as Booking[];
      
      setBookings([...newBookings]);
      saveStorageBookings([...newBookings])
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
        formData,
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

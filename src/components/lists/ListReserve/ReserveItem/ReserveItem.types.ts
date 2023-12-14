import { BookingDetail } from "../../../../hooks/Bookings/useBookings.types";

export interface ReserveItemProps {
  idReserve: number;
}

export interface ReserveItemUnique {
    id: number;
    imageUrl: string;
    title: string;
    month: string;
    year: number;
  }
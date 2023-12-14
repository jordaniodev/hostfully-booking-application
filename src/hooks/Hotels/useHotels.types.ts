import { ReactNode } from "react";

export interface Hotel {
  id: number;
  name: string;
  address: string;
  imageUrl: string;
  quantityReviews: number;
  quantityStar: 1 | 2 | 3 | 4 | 5;
  mark: number;
  price: number;
}

export type HotelInput = Omit<Hotel, "id">;

export interface HotelContextData {
  Hotels: Hotel[];
  isLoading: boolean;
  sortBy: (indexOrder: HotelFilterBy) => void;
  detailHotel: (idHotel: number) => Hotel;
}

export type HotelFilterBy = 'price' | 'quantityStar' | 'quantityReviews' | 'recommended';
export interface HotelProviderProps {
  children: ReactNode;
}

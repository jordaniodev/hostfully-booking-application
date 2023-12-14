import { createContext, useContext, useEffect, useState } from "react";
import {
  Hotel,
  HotelContextData,
  HotelFilterBy,
  HotelProviderProps,
} from "./useHotels.types";
import { HOTELS_DATA } from "./useHotels.data";

const HotelsContext = createContext<HotelContextData>(
  {} as HotelContextData
);

export function HotelsProvider({ children }: HotelProviderProps) {
  const [Hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  

  useEffect(() => {
    setIsLoading(true); // For simulate a request loading
    setTimeout(() => {
      setHotels(HOTELS_DATA);
      setIsLoading(false);
    }, 500);
  }, []);

  const sortBy = (indexOrder?: HotelFilterBy) => {
    if(!indexOrder) return;
    if(indexOrder === 'recommended') return;
    const hotelFiltered = [...Hotels];
    hotelFiltered.sort((hotelA, hotelB) => hotelA[indexOrder] - hotelB[indexOrder]);

    setIsLoading(true); // For simulate a request loading

    setTimeout(() => {
      setHotels(hotelFiltered);
      setIsLoading(false);
    }, 500);
  }

  const detailHotel = (idHotel: number) => {
    return HOTELS_DATA.find(hotel => hotel.id === idHotel)!;
  }

  return (
    <HotelsContext.Provider
      value={{ 
        Hotels,
        isLoading,
        sortBy,
        detailHotel
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
}

export function useHotel() {
  const context = useContext(HotelsContext);
  return context;
}

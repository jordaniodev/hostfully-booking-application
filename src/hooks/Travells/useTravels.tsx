import { createContext, useContext, useEffect, useState } from "react";
import {
  Travel,
  TravelContextData,
  TravelProviderProps,
} from "./useTravel.types";
import { TRAVELS } from "./useTravels.data";

const TravelsContext = createContext<TravelContextData>(
  {} as TravelContextData
);

export function TravelsProvider({ children }: TravelProviderProps) {
  const [Travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTravels(TRAVELS);
    }, 500);
  }, []);

  return (
    <TravelsContext.Provider
      value={{ Travels }}
    >
      {children}
    </TravelsContext.Provider>
  );
}

export function useTravel() {
  const context = useContext(TravelsContext);
  return context;
}

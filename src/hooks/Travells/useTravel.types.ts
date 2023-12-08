import { ReactNode } from "react";

export interface Travel {
  id: number;
  imageUrl: string;
  title: string;
  subTitle: string;
  price: number;
}

export type TravelInput = Omit<Travel, "id">;

export interface TravelContextData {
  Travels: Travel[];
}

export interface TravelProviderProps {
  children: ReactNode;
}

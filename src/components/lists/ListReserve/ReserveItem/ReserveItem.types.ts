export interface ReserveItemProps {
  reserve: ReserveItemUnique;
}

export interface ReserveItemUnique {
    id: number;
    imageUrl: string;
    title: string;
    month: string;
    year: number;
  }
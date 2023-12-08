import { useState } from "react";
import { Input } from "../Input";
import chevronDown from "./../../../assets/img/icons/chevronDown.svg";
import searchIcon from "./../../../assets/img/icons/search.svg";
import "./FormSearch.scss";
import { useBooking } from "../../../hooks/Bookings/useBookings";
export const FormSearch = () => {
  const [minValue, setMinValue] = useState<string>();
  const [maxValue, setMaxValue] = useState<string>();
  const { setMonth, setYear } = useBooking();

  const selectDepart = (dateDepart: string) => {
    setMinValue(dateDepart);
    const parts = dateDepart.split("-");
    const year = parseInt(parts[0]);
    const day = parseInt(parts[1]);
    const month = parseInt(parts[2]) - 1; 

    const date = new Date(year, month, day);
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    setMonth(monthName);
    setYear(year)
  };

  const selectReturn = (value: string) => {
    setMaxValue(value);
  };
  return (
    <form>
      <Input
        label="Destination"
        icon={<img src={searchIcon} />}
        category="outlined"
      />
      <Input
        label="Depart"
        category="outlined"
        type="date"
        onChange={(event: any) => selectDepart(event.target.value)}
        max={maxValue}
      />
      <Input
        label="Return"
        category="outlined"
        type="date"
        min={minValue}
        onChange={(event: any) => selectReturn(event.target.value)}
      />
      <Input
        label="Rooms & Guests"
        icon={<img src={chevronDown} />}
        category="outlined"
      />
    </form>
  );
};

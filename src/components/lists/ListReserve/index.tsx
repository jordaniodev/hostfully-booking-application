import { ReserveItem } from "./ReserveItem";
import './ListReserve.scss'
import { Button } from "../../buttons/Button";
import { useBooking } from "../../../hooks/Bookings/useBookings";
import { Loading } from "../../layout/Loading";
import { useState } from 'react';

export const ListReserve = () => {
  const {Bookings} = useBooking();
  const [perPage, setPerPage] = useState(5);
  
  return Bookings.length ? (
    <>
      <ul className="container-list-reserve">
        {Bookings.slice(0,perPage).map((reserve) => (
          <ReserveItem reserve={reserve} />
        ))}
      </ul>
      <div className="container-button">
        {(Bookings.length > perPage) ? <Button alingCenter fullWidth category="dark" onClick={() => setPerPage(perPage + 5)}>Show more results</Button> : ''}
      </div>
    </>
  ) : <Loading />;
};

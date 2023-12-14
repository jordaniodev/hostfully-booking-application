import { ReserveItem } from "./ReserveItem";
import { Button } from "../../buttons/Button";
import { useBooking } from "../../../hooks/Bookings/useBookings";
import { Loading } from "../../layout/Loading";
import { useState } from "react";
import { ContainerButton, ContainerListReserve } from "./ListReserver.style";

export const ListReserve = () => {
  const { Bookings } = useBooking();
  const [perPage, setPerPage] = useState(5);

  return Bookings.length ? (
    <>
      <ContainerListReserve>
        {Bookings.slice(0, perPage).map((reserve) => (
          <ReserveItem idReserve={reserve.id} />
        ))}
      </ContainerListReserve>
      <ContainerButton>
        {Bookings.length > perPage ? (
          <Button
            aligncenter={true}
            fullwidth={true}
            category="dark"
            onClick={() => setPerPage(perPage + 5)}
          >
            Show more results
          </Button>
        ) : (
          ""
        )}
      </ContainerButton>
    </>
  ) : (
    <Loading />
  );
};

import { Button } from "../../../buttons/Button";
import { ReserveItemProps } from "./ReserveItem.types";
import cancelIcon from "./../../../../assets/img/icons/cancel.svg";
import { useBooking } from "../../../../hooks/Bookings/useBookings";
import { useState, useEffect } from 'react';
import {
  ActionReserveItem,
  ContainerButtonDesk,
  ContainerButtonMobile,
  InfoReserveItem,
  ReserveItemCustom,
  RoomReserveItem,
} from "./ReserveItem.style";
import { BookingDetail } from "../../../../hooks/Bookings/useBookings.types";
import { useNavigate } from "react-router-dom";
export const ReserveItem = ({ idReserve }: ReserveItemProps) => {
  const { deleteBooking, detailBooking } = useBooking();
  const navigate = useNavigate();
  const [reserve, setReserve] = useState<BookingDetail>();

  const detailReservation = () => {
    navigate(`/booking-detail/${idReserve}`)
  };

  
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      return  await detailBooking(idReserve);
    }
    fetchData()
      .then((data) => setReserve(data))
      .catch(console.error);
  }, [])
  
  return (
    reserve &&
    <ReserveItemCustom>
      <InfoReserveItem>
        <RoomReserveItem src={reserve.hotel.imageUrl} alt="" />
        <p>{reserve.hotel.name}</p>
      </InfoReserveItem>
      <ActionReserveItem>
        <ContainerButtonDesk>
          <Button category="filled" onClick={detailReservation}>
            Detail reservation
          </Button>
        </ContainerButtonDesk>
        <ContainerButtonMobile>
          <Button
            category="filled"
            icon={<img src={cancelIcon} />}
            iconPosition="left"
            onClick={detailReservation}
          ></Button>
        </ContainerButtonMobile>
      </ActionReserveItem>
    </ReserveItemCustom>
  );
};

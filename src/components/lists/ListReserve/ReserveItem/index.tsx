import { Button } from "../../../buttons/Button";
import "./ReserveItem.scss";
import { ReserveItemProps } from "./ReserveItem.types";
import cancelIcon from './../../../../assets/img/icons/cancel.svg'
import { useBooking } from "../../../../hooks/Bookings/useBookings";
export const ReserveItem = ({ reserve }: ReserveItemProps) => {
  const {deleteBooking} = useBooking();
  const cancelReservation = () => {
    if(confirm('Are you sure you want to cancel the reservation?')){
      deleteBooking(reserve.id);
    }
  }
  return (
    <li className="item">
      <div className="info">
        <img src={reserve.imageUrl} alt="" className="room" />
        <p>{reserve.title}</p>
      </div>
      <div className="action">
        <span className="date">
          {reserve.month}/ <span className="year">{reserve.year}</span> 
        </span>
        <div className="container-button-desk">
          <Button category="danger" onClick={cancelReservation}>Cancel reservation</Button>
        </div>
        <div className="container-button-mobile">
          <Button category="danger" icon={<img src={cancelIcon} />} iconPosition="left" onClick={cancelReservation}> </Button>
        </div>
        
      </div>
    </li>
  );
};

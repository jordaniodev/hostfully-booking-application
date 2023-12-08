import { CardProps } from "./Card.types";
import "./Card.scss";
import { Button } from "../../buttons/Button";
import { useBooking } from "../../../hooks/Bookings/useBookings";

export const Card = ({ imageUrl, title, subTitle, price }: CardProps) => {
  const {createBooking} = useBooking();
  const bookNow = () => {
    createBooking({ imageUrl, title, amount: price });
  }
  return (
    <div className="card">
      <img src={imageUrl} />
      <div className="main">
        <div className="info">
          <h4>{title}</h4>
          <h5>{subTitle}</h5>
        </div>
        <span className="price">$ {price}</span>
      </div>
      <div className="footer">
        <Button category="buy" fullWidth onClick={() => bookNow()}>
          Book now!
        </Button>
      </div>
    </div>
  );
};

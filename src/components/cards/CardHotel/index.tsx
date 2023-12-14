import { Card } from "react-bootstrap";
import { useBooking } from "../../../hooks/Bookings/useBookings";
import {
  AddressCardCustom,
  CardCustom,
  CardFooterCustom,
  FilterPinIconImage,
  ImageCardCustom,
  NoteContainer,
  NoteDescription,
  NoteValue,
  TitleCardCustom,
} from "./CardHotel.style";
import pinBlueIcon from "./../../../assets/img/icons/pin-blue.svg";
import { Stars } from "../../stars/Stars";
import { Button } from "../../buttons/Button";
import { CardHotelProps } from "./CardHotel.types";

export const CardHotel = ({
  card: { id, imageUrl, name, price, address, mark, quantityReviews, quantityStar },
}: CardHotelProps) => {
  const { createBooking } = useBooking();

  const onCreateBooking = () => {
    createBooking({hotelId : id});
  }
  const getMarkByValue = (value: number) => {
    const thresholds = [
      { limit: 1, mark: "Very bad" },
      { limit: 2, mark: "Bad" },
      { limit: 3, mark: "Medium" },
      { limit: 4, mark: "Good" },
      { limit: 4.5, mark: "Very Good" },
    ];

    for (const threshold of thresholds) {
      if (value < threshold.limit) {
        return threshold.mark;
      }
    }

    return "Excellent";
  };

  return (
    <>
      <CardCustom>
        <ImageCardCustom variant="left" src={imageUrl} />
        <Card.Body>
          <TitleCardCustom>
            <h3>{name}</h3>
            <div className="price">
              <span className="description">starting from</span>
              <div className="value">
                ${price}/<span className="night">night</span>
              </div>
              <span className="description">excl. tax</span>
            </div>
          </TitleCardCustom>
          <Card.Text>
            <AddressCardCustom>
              <FilterPinIconImage src={pinBlueIcon} alt="" /> {address}
            </AddressCardCustom>
            <Stars quantityStar={quantityStar} />

            <NoteContainer>
              <NoteValue>{mark}</NoteValue>
              <NoteDescription>
                <span className="bold"> {getMarkByValue(mark)}</span>{" "}
                {quantityReviews} reviews
              </NoteDescription>
            </NoteContainer>
          </Card.Text>
          <CardFooterCustom>
            <Button category="filled" fullwidth={true} aligncenter onClick={() => onCreateBooking()}>
              Book Hotel
            </Button>
          </CardFooterCustom>
        </Card.Body>
      </CardCustom>
    </>
  );
};

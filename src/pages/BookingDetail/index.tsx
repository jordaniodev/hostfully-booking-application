import { Card } from "react-bootstrap";
import { FormSearch } from "../../components/form/FormSearch";
import { Container } from "../../components/layout/Container/Container.style";
import { Layout } from "../../components/layout/Layout";
import {
  CardBodyPrice,
  CardCustom,
  CardPriceHeader,
  ContainerButton,
  ContainerFormSearch,
  ContainerPrice,
  Date as DateComponent,
  DateContainer,
  NoteContainer,
  NoteDescription,
  NoteValue,
  TitleCardCustom,
  TwoColumns,
} from "./BookingDetail.style";
import { Button } from "../../components/buttons/Button";
import buildIcon from "./../../assets/img/icons/building.svg";
import penIcon from "./../../assets/img/icons/pen.svg";
import hotelImage from "./../../assets/img/hotel.jpeg";
import { FormSearchEdit } from "../../components/form/FormSearchEdit";
import { useBooking } from "../../hooks/Bookings/useBookings";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BookingDetail as BookingDetailProps } from "../../hooks/Bookings/useBookings.types";
import { useAlert } from "react-bootstrap-hooks-alert";

export default function BookingDetail() {
  const { deleteBooking, detailBooking } = useBooking();
  const [bookingDetail, setBookingDetail] = useState<BookingDetailProps>();
  const [isUpdate, setIsUpdate] = useState(false);
  let { id } = useParams();
  const { success } = useAlert();
  const navigate = useNavigate();

  const fetchData = async () => {
    const idInt = parseInt(id as string);
    try {
      const detail = await detailBooking(idInt);
      setBookingDetail(detail as BookingDetailProps);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onDeleteBooking = () => {
    deleteBooking(parseInt(id as string));
    success("Deleted with success");
    navigate("/");
  };

  const getDateFormat = (type: "checkIn" | "checkOut") => {
    const dateString = bookingDetail?.book[type];
    let [year, month, day] = dateString!.split("-") as string[];

    const dateObject: Date = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );

    return dateObject.toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      year: "2-digit",
      day: "numeric",
    });
  };

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
      {bookingDetail && (
        <Layout>
          <main>
            <Container>
              <TwoColumns>
                <div className="info">
                  <CardCustom>
                    <Card.Title>
                      <TitleCardCustom>
                        <h3>{bookingDetail.book.city}</h3>
                        <div className="price">
                          <div className="value">
                            ${bookingDetail.hotel.price}/
                            <span className="night">night</span>
                          </div>
                        </div>
                      </TitleCardCustom>
                    </Card.Title>
                    <DateContainer>
                      <DateComponent>
                        <span className="value">
                          {getDateFormat("checkIn")}
                        </span>
                        <span className="checkin">Check-In</span>
                      </DateComponent>
                      <img src={buildIcon} alt="" />
                      <DateComponent>
                        <span className="value">
                          {getDateFormat("checkOut")}
                        </span>
                        <span className="checkin">Check-Out</span>
                      </DateComponent>
                    </DateContainer>
                  </CardCustom>
                </div>
                <ContainerFormSearch>
                  {isUpdate && (
                    <FormSearchEdit
                      idBooking={parseInt(id as string)}
                      wasEddited={() => window.location.reload()}
                    />
                  )}
                </ContainerFormSearch>
                <ContainerPrice>
                  <CardCustom>
                    <CardPriceHeader>
                      <img src={hotelImage} alt="Hotel Image" />
                      <div className="info">
                        <h3 className="place">{bookingDetail.book.city}</h3>
                        <h2 className="name">{bookingDetail.hotel.name}</h2>
                        <NoteContainer>
                          <NoteValue>4.2</NoteValue>
                          <NoteDescription>
                            <span className="bold">
                              {" "}
                              {getMarkByValue(bookingDetail.hotel.mark)}
                            </span>{" "}
                            {bookingDetail.hotel.quantityReviews} reviews
                          </NoteDescription>
                        </NoteContainer>
                      </div>
                    </CardPriceHeader>
                    <CardBodyPrice>
                      <h4>Booking Details</h4>
                      <ul>
                        <li>
                          <span className="description">Price</span>
                          <span className="value">
                            ${bookingDetail.hotel.price}
                          </span>
                        </li>
                        <li>
                          <span className="description">Qnt Adults</span>
                          <span className="value">
                            {bookingDetail.book.adults}
                          </span>
                        </li>
                        <li>
                          <span className="description">Qnt Kids</span>
                          <span className="value">
                            {bookingDetail.book.kids}
                          </span>
                        </li>
                      </ul>
                    </CardBodyPrice>
                  </CardCustom>
                  <ContainerButton>
                    <Button
                      category="filled"
                      icon={<img src={penIcon} />}
                      onClick={() => setIsUpdate(true)}
                    ></Button>
                    <Button
                      category="danger"
                      fullwidth={true}
                      onClick={onDeleteBooking}
                    >
                      Cancel Booking
                    </Button>
                  </ContainerButton>
                </ContainerPrice>
              </TwoColumns>
            </Container>
          </main>
        </Layout>
      )}
    </>
  );
}

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
  Date,
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
export default function BookingDetail() {
  return (
    <>
      <Layout>
        <main>
          <Container>
            <TwoColumns>
              <div className="info">
                <CardCustom>
                  <Card.Title>
                    <TitleCardCustom>
                      <h3>CVK Park Bosphorus Hotel Istanbul</h3>
                      <div className="price">
                        <div className="value">
                          $240/<span className="night">night</span>
                        </div>
                      </div>
                    </TitleCardCustom>
                  </Card.Title>
                  <DateContainer>
                    <Date>
                      <span className="value">Thursday, Dec 8</span>
                      <span className="checkin">Check-In</span>
                    </Date>
                    <img src={buildIcon} alt="" />
                    <Date>
                      <span className="value">Thursday, Dec 8</span>
                      <span className="checkin">Check-In</span>
                    </Date>
                  </DateContainer>
                </CardCustom>
              </div>
              <ContainerFormSearch>
                <FormSearchEdit />
              </ContainerFormSearch>
              <ContainerPrice>
                <CardCustom>
                  <CardPriceHeader>
                    <img src={hotelImage} alt="Hotel Image" />
                    <div className="info">
                      <h3 className="place">CVK Park Bosphorus...</h3>
                      <h2 className="name">
                        Superior room - 1 double bed or 2 twin beds
                      </h2>
                      <NoteContainer>
                        <NoteValue>4.2</NoteValue>
                        <NoteDescription>
                          <span className="bold"> Very Good</span> 371 reviews
                        </NoteDescription>
                      </NoteContainer>
                    </div>
                  </CardPriceHeader>
                  <CardBodyPrice>
                    <h4>Booking Details</h4>
                    <ul>
                      <li>
                        <span className="description">Price</span>
                        <span className="value">$240</span>
                      </li>
                      <li>
                        <span className="description">Qnt Adults</span>
                        <span className="value">2</span>
                      </li>
                      <li>
                        <span className="description">Qnt Kids</span>
                        <span className="value">0</span>
                      </li>
                    </ul>
                  </CardBodyPrice>
                </CardCustom>
                <ContainerButton>
                  <Button
                    category="filled"
                    icon={<img src={penIcon} />}
                  ></Button>
                  <Button category="danger" fullwidth={true}>
                    Cancel Booking
                  </Button>
                </ContainerButton>
              </ContainerPrice>
            </TwoColumns>
          </Container>
        </main>
      </Layout>
    </>
  );
}

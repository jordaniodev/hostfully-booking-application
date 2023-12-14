import { Button } from "../../components/buttons/Button";

import { Layout } from "../../components/layout/Layout";
import img1 from "./../../assets/img/cards/img1.jpeg";
import img2 from "./../../assets/img/cards/img2.jpeg";
import img3 from "./../../assets/img/cards/img3.jpeg";
import img4 from "./../../assets/img/cards/img4.jpeg";
import { ListReserve } from "../../components/lists/ListReserve";
import { ToastContainer } from "react-toastify";
import { FormSearch } from "../../components/form/FormSearch";
import {
  ContainerActionFallTravel,
  ContainerFormFilterSecondary,
  FallTravel,
  FooterFall,
  GridImages,
  HeaderFallTravel,
  HeaderPlaceTogether,
  HeaderSimpleCard,
  HeroSlide,
  ImageCardGridImages,
  MapFallTravel,
  ParagraphSimpleCard,
  PlaceTogether,
  PriceSimpleCard,
  Reservations,
  SimpleCard,
  TitlePriceSimpleCard,
  ValuePriceSimpleCard,
} from "./Home.style";
import { Container } from "../../components/layout/Container/Container.style";
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Layout>
        <>
          <HeroSlide>
            <Container>
              <h1>Make your travel whishlist, we’ll do the rest</h1>
              <p>Special offers to suit your plan</p>
            </Container>
          </HeroSlide>
          <Container>
            <ContainerFormFilterSecondary>
              <FormSearch />
            </ContainerFormFilterSecondary>
          </Container>
          <PlaceTogether>
            <Container>
              <HeaderPlaceTogether>
                <div className="text">
                  <h2>Let's go places together</h2>
                  <p>
                    Discover the latest offers and news and start planning your
                    next trip with us.
                  </p>
                </div>
              </HeaderPlaceTogether>
            </Container>
            <MapFallTravel></MapFallTravel>
          </PlaceTogether>

          <FallTravel>
            <Container>
              <HeaderFallTravel>
                <div>
                  <h2>Fall into travel</h2>
                  <p>
                    Going somewhere to celebrate this season? Whether you’re
                    going home or somewhere to roam, we’ve got the travel tools
                    to get you to your destination.
                  </p>
                </div>
                <ContainerActionFallTravel>
                  <Button category="outline">See All</Button>
                </ContainerActionFallTravel>
              </HeaderFallTravel>
            </Container>
            <Container>
              <GridImages>
                <SimpleCard>
                  <HeaderSimpleCard>
                    <h2>Backpacking Sri Lanka</h2>
                    <PriceSimpleCard>
                      <TitlePriceSimpleCard>FROM</TitlePriceSimpleCard>
                      <ValuePriceSimpleCard>$700</ValuePriceSimpleCard>
                    </PriceSimpleCard>
                  </HeaderSimpleCard>
                  <div>
                    <ParagraphSimpleCard>
                      Traveling is a unique experience as it's the best way to
                      unplug from the pushes and pulls of daily life. It helps
                      us to forget about our problems, frustrations, and fears
                      at home. During our journey, we experience life in
                      different ways. We explore new places, cultures, cuisines,
                      traditions, and ways of living.
                    </ParagraphSimpleCard>
                  </div>
                </SimpleCard>
                <ImageCardGridImages src={img1} alt="" />
                <ImageCardGridImages src={img2} alt="" />
                <ImageCardGridImages src={img3} alt="" />
                <ImageCardGridImages src={img4} alt="" />
              </GridImages>
              <FooterFall>
                <Button category="outline" fullwidth={true} aligncenter>
                  See All
                </Button>
              </FooterFall>
            </Container>
          </FallTravel>
          <Reservations id="reservation">
            <Container>
              <h2>Reservation</h2>
              <ListReserve />
            </Container>
          </Reservations>
        </>
      </Layout>
    </>
  );
}

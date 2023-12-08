import { Button } from "../../components/buttons/Button";

import { ListCard } from "../../components/cards/ListCard";
import { FormFilter } from "../../components/form/FormFilter";
import { Layout } from "../../components/layout/Layout";
import img1 from "./../../assets/img/cards/img1.jpeg";
import img2 from "./../../assets/img/cards/img2.jpeg";
import img3 from "./../../assets/img/cards/img3.jpeg";
import img4 from "./../../assets/img/cards/img4.jpeg";
import 'react-toastify/dist/ReactToastify.css';
import "./Home.scss";
import { ListReserve } from "../../components/lists/ListReserve";
import { useState } from "react";
import { Travel } from "../../hooks/Travells/useTravel.types";
import { useTravel } from "../../hooks/Travells/useTravels";
import { ToastContainer } from "react-toastify";
export default function Home() {
  const [cards, setCards] = useState<Travel[]>();
  const { Travels } = useTravel();

  return (
    <>
    <ToastContainer />
      <Layout>
        <div className="home-page">
          <div className="heroSlide">
            <div className="container">
              <h1>Make your travel whishlist, we’ll do the rest</h1>
              <p>Special offers to suit your plan</p>
            </div>
          </div>
          <div className="container">
            <div className="container-form-filter-2">
              <FormFilter onSubmit={() => setCards(Travels)} />
            </div>
          </div>
          {cards ? (
            <section className="fallTravel">
              <div className="container">
                <div className="header">
                  <div className="container-text">
                    <h2>Options to travel</h2>
                    <p>
                      Going somewhere to celebrate this season? Whether you’re
                      going home or somewhere to roam, we’ve got the travel
                      tools to get you to your destination.
                    </p>
                  </div>
                  <div className="container-action">
                    <Button category="outline">See All</Button>
                  </div>
                </div>
              </div>
              <ListCard cards={cards} />
            </section>
          ) : (
            ""
          )}
          <section className="place-together">
            <div className="container header">
              <div className="text">
                <h2>Let's go places together</h2>
                <p>
                  Discover the latest offers and news and start planning your
                  next trip with us.
                </p>
              </div>
            </div>
            <div className="map"></div>
          </section>

          <section className="fallTravel">
            <div className="container">
              <div className="header">
                <div className="container-text">
                  <h2>Fall into travel</h2>
                  <p>
                    Going somewhere to celebrate this season? Whether you’re
                    going home or somewhere to roam, we’ve got the travel tools
                    to get you to your destination.
                  </p>
                </div>
                <div className="container-action">
                  <Button category="outline">See All</Button>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="grid-images">
                <div className="simple-card">
                  <div className="header">
                    <h2>Backpacking Sri Lanka</h2>
                    <div className="price">
                      <span className="title">FROM</span>
                      <span className="value">$700</span>
                    </div>
                  </div>
                  <div className="main">
                    <p>
                      Traveling is a unique experience as it's the best way to
                      unplug from the pushes and pulls of daily life. It helps
                      us to forget about our problems, frustrations, and fears
                      at home. During our journey, we experience life in
                      different ways. We explore new places, cultures, cuisines,
                      traditions, and ways of living.
                    </p>
                  </div>
                </div>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
              </div>
              <div className="footer-fall">
                <Button category="outline" fullWidth alingCenter>
                  See All
                </Button>
              </div>
            </div>
          </section>
          <section className="reservations" id="reservation">
            <div className="container">
              <h2>Reservation</h2>
              <ListReserve />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

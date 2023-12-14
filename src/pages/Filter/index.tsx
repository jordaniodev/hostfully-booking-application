import { FormSearch } from "../../components/form/FormSearch";
import { Layout } from "../../components/layout/Layout";
import { Container } from "./../../components/layout/Container/Container.style";
import {
  ContainerItems,
  TwoColumnsFilter,
} from "./Filter.style";
import { FormFilter } from "../../components/form/FormFilter";
import { ListCardHotel } from "../../components/cards/ListCardHotel";
import { useBooking } from "../../hooks/Bookings/useBookings";
import { useNavigate } from "react-router-dom";
export default function Filter() {
  const { formData } = useBooking();
  const navigate = useNavigate();

  if(!formData?.city){
    navigate("/");
  }
  return (
    <>
      <Layout>
        <main>
          <Container>
            <FormSearch />
          </Container>
          <section>
            <Container>
              <TwoColumnsFilter>
                <FormFilter />
                <ContainerItems>
                  
                  <ListCardHotel />
                </ContainerItems>
              </TwoColumnsFilter>
            </Container>
          </section>
        </main>
      </Layout>
    </>
  );
}

import { FormEventHandler, useEffect, useRef, useState } from "react";
import { Input } from "../Input";
import { useBooking } from "../../../hooks/Bookings/useBookings";
import {
  BoxFilter,
  ContainerPerson,
  FooterFilter,
  FormContainer,
} from "./FormSearchEdit.style";
import { InputGoogleMaps } from "../InputGoogleMaps";
import { Button } from "../../buttons/Button";
import Form from "react-bootstrap/Form";
import { FormSerachEditProps } from "./FomrSearchEdit.types";
import {  BookingDetail } from "../../../hooks/Bookings/useBookings.types";
import { useAlert } from "react-bootstrap-hooks-alert";

export const FormSearchEdit = ({ idBooking, wasEddited}: FormSerachEditProps) => {
  const [minValue, setMinValue] = useState<string>();
  const [maxValue, setMaxValue] = useState<string>();
  const { updateBooking,  detailBooking } = useBooking();
  const formReference = useRef<HTMLFormElement>(null);
  const [bookingData, setBookingData] = useState<BookingDetail>();
  const { danger } = useAlert();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await detailBooking(idBooking);
        setBookingData(detail);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const submitValue: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formReference.current) {
      const formDataValue = new FormData(event.currentTarget);
      const checkIn = formDataValue.get("checkin") as string;
      const checkOut = formDataValue.get("checkout") as string;
      const adults = parseInt(formDataValue.get("adults") as string);
      const kids = parseInt(formDataValue.get("kids") as string);
      const city = formDataValue.get("city") as string;
      if(kids + adults === 0){
        danger(' Please select a number to kids and adults');
      }else{
        updateBooking(idBooking, { checkIn, checkOut, adults, kids, city });
        wasEddited();
      }
    }
  };

  const selectDepart = (dateDepart: string) => {
    setMinValue(dateDepart);
  };

  const selectReturn = (value: string) => {
    setMaxValue(value);
  };
  return (
    <BoxFilter>
      <h3>Update your Booking </h3>
      <Form ref={formReference} onSubmit={submitValue}>
        <FormContainer>
          <InputGoogleMaps
            name="city"
            required={true}
            defaultValue={bookingData?.book.city}
          />
          <Input
            required={true}
            label="Checkin"
            name="checkin"
            category="outlined"
            defaultValue={bookingData?.book.checkIn}
            type="date"
            onChange={(event: any) => selectDepart(event.target.value)}
            max={maxValue}
            min={new Date().toISOString().split("T")[0]}
          />
          <Input
            required={true}
            label="Checkout"
            name="checkout"
            category="outlined"
            defaultValue={bookingData?.book.checkOut}
            type="date"
            min={minValue}
            onChange={(event: any) => selectReturn(event.target.value)}
          />
          <ContainerPerson>
            <Input
              required={true}
              name="adults"
              label="Adults"
              type="number"
              category="outlined"
              min="0"
              defaultValue={bookingData?.book.adults}
            />
            <Input
              required={true}
              name="kids"
              min="0"
              label="Kids"
              type="number"
              defaultValue={bookingData?.book.kids}
              category="outlined"
            />
          </ContainerPerson>
        </FormContainer>
        <FooterFilter>
          <Button type="submit" iconPosition="left" category="filled">
            Update Booking
          </Button>
        </FooterFilter>
      </Form>
    </BoxFilter>
  );
};

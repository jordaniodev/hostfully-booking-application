import flyIcon from "./../../../assets/img/icons/fly.svg";
import { FormEventHandler, useRef, useState } from "react";
import { Input } from "../Input";
import { useBooking } from "../../../hooks/Bookings/useBookings";
import {
  BoxFilter,
  ContainerPerson,
  FooterFilter,
  FormContainer,
} from "./FormSearch.style";
import { InputGoogleMaps } from "../InputGoogleMaps";
import { Button } from "../../buttons/Button";
import Form from "react-bootstrap/Form";
import { useAlert } from "react-bootstrap-hooks-alert";
import { useNavigate } from "react-router-dom";

export const FormSearch = () => {
  const [minValue, setMinValue] = useState<string>();
  const [maxValue, setMaxValue] = useState<string>();
  const { setFormData, formData } = useBooking();
  const navigate = useNavigate();
  const formReference = useRef<HTMLFormElement>(null);

  const submitValue: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formReference.current) {
      const formDataValue = new FormData(event.currentTarget);
      const checkIn = formDataValue.get("checkin") as string;
      const checkOut = formDataValue.get("checkout") as string;
      const adults = formDataValue.get("adults") as string;
      const kids = formDataValue.get("kids") as string;
      const city = formDataValue.get("city") as string;

      setFormData({ checkIn, checkOut, adults, kids, city });
      navigate("/filter");
    }
  };

  const selectDepart = (dateDepart: string) => {
    setMinValue(dateDepart);
    const parts = dateDepart.split("-");
    const year = parseInt(parts[0]);
    const day = parseInt(parts[2]);
    const month = parseInt(parts[1]) - 1;

    const date = new Date(year, month, day);
    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);
    setMonth(monthName);
    setYear(year);
  };

  const selectReturn = (value: string) => {
    setMaxValue(value);
  };
  return (
    <BoxFilter>
      <h3>Where are you flying? </h3>
      <Form ref={formReference} onSubmit={submitValue}>
        <FormContainer>
          <InputGoogleMaps
            name="city"
            onSelectOption={(option) => console.log(option)}
            require
            defaultValue={formData?.city}
          />
          <Input
            required={true}
            label="Checkin"
            name="checkin"
            category="outlined"
            defaultValue={formData?.checkIn}
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
            defaultValue={formData?.checkOut}
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
              defaultValue={(formData?.adults) ? formData?.adults : 0}
            />
            <Input
              required={true}
              name="kids"
              min="0"
              label="Kids"
              type="number"
              defaultValue={(formData?.kids) ? formData?.kids : 0}
              category="outlined"
            />
          </ContainerPerson>
        </FormContainer>
        <FooterFilter>
          <Button type="submit" iconPosition="left" category="filled">
            Show Hotels
          </Button>
        </FooterFilter>
      </Form>
    </BoxFilter>
  );
};

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
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-bootstrap-hooks-alert";

export const FormSearch = () => {
  const [minValue, setMinValue] = useState<string>();
  const [maxValue, setMaxValue] = useState<string>();
  const { setFormData, formData } = useBooking();
  const navigate = useNavigate();
  const { danger } = useAlert();
  const formReference = useRef<HTMLFormElement>(null);

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
        setFormData({ checkIn, checkOut, adults, kids, city });
        navigate("/filter");
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
      <h3>Where are you flying? </h3>
      <Form ref={formReference} onSubmit={submitValue}>
        <FormContainer>
          <InputGoogleMaps
            name="city"
            required={true}
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

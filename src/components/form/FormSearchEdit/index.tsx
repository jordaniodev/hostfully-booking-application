import flyIcon from "./../../../assets/img/icons/fly.svg";
import { FormEventHandler, useRef, useState } from "react";
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
import { useAlert } from "react-bootstrap-hooks-alert";

export const FormSearchEdit = () => {
  const [minValue, setMinValue] = useState<string>();
  const [maxValue, setMaxValue] = useState<string>();
  const { setMonth, setYear } = useBooking();
  const { success, info } = useAlert()

  const formReference = useRef<HTMLFormElement>(null);

  const submitValue: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formReference.current) {
      const formData = new FormData(event.currentTarget);

      const checkinValue = formData.get("checkin") as string;
      const checkoutValue = formData.get("checkout") as string;
      const adultsValue = formData.get("adults") as string;
      const kidsValue = formData.get("kids") as string;

      success(`Checkin ${checkinValue}`);
      console.log("Checkout:", checkoutValue);
      console.log("Adults:", adultsValue);
      console.log("Kids:", kidsValue);
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
            name="place"
            onSelectOption={(option) => console.log(option)}
          />
          <Input
            required={true}
            label="Checkin"
            name="checkin"
            category="outlined"
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
            type="date"
            min={minValue}
            onChange={(event: any) => selectReturn(event.target.value)}
          />
          <ContainerPerson>
            <Input
              name="adults"
              label="Adults"
              type="number"
              category="outlined"
              min="0"
            />
            <Input
              name="kids"
              min="0"
              label="Kids"
              type="number"
              category="outlined"
            />
          </ContainerPerson>
        </FormContainer>
        <FooterFilter>
          <Button
            type="submit"
            icon={<img src={flyIcon} />}
            iconPosition="left"
            category="filled"
          >
            Show Filghts
          </Button>
        </FooterFilter>
      </Form>
    </BoxFilter>
  );
};

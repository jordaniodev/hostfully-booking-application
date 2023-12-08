import flyIcon from "./../../../assets/img/icons/fly.svg";
import "./FormFilter.scss";
import { Button } from "../../buttons/Button";
import { FormSearch } from "../FormSearch";
import { FormFilterProps } from "./FormFilter.types";
import { useBooking } from "../../../hooks/Bookings/useBookings";
export const FormFilter = ({ onSubmit }: FormFilterProps) => {
    const {year, month} = useBooking();

    const submitValue = () => {
        if(year && month) {
            onSubmit();
        }else{
            alert('Please select a year and month to your travel');
        }
    }

  return (
    <div className="box-filter">
      <h3>Where are you flying? </h3>
      <FormSearch />
      <div className="footer-filter">
        <Button
          onClick={submitValue}
          icon={<img src={flyIcon} />}
          iconPosition="left"
          category="filled"
        >
          Show Filghts
        </Button>
      </div>
    </div>
  );
};

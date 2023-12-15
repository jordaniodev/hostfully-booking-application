import { StartContainer } from "./Stars.style";
import startFilledIcon from "./../../../assets/img/icons/star-filled.svg";
import startOutlinedIcon from "./../../../assets/img/icons/star-outlined.svg";
import { StarsProps } from "./Stars.types";

export const Stars = ({quantityStar}: StarsProps) => {
  return (
    <StartContainer>
      {Array(quantityStar).fill('').map((_, index) => <img key={index} src={startFilledIcon} alt="Star Filled" />)}
      {Array(5 - quantityStar).fill('').map((_, index) => <img key={index} src={startOutlinedIcon} alt="Star Outlined" />)}
      <span> {quantityStar} Stars Hotel </span>
    </StartContainer>
  );
};

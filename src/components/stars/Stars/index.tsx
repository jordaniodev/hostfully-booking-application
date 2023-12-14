import { StartContainer } from "./Stars.style";
import startFilledIcon from "./../../../assets/img/icons/star-filled.svg";
import startOutlinedIcon from "./../../../assets/img/icons/star-outlined.svg";
import { StarsProps } from "./Stars.types";

export const Stars = ({quantityStar}: StarsProps) => {
  return (
    <StartContainer>
      {Array(quantityStar).fill('').map(_ => <img src={startFilledIcon} alt="" />)}
      {Array(5 - quantityStar).fill('').map(_ => <img src={startOutlinedIcon} alt="" />)}
      <span> {quantityStar} Stars Hotel </span>
    </StartContainer>
  );
};

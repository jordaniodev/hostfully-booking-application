import { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = ({
  category = "outline",
  children,
  fullWidth,
  size = 'large',
  icon,
  iconPosition,
  type = 'button',
  alingCenter,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} {...props} className={`btn ${category} ${alingCenter ? "alingCenter" : ""} ${fullWidth ? "fullWidth" : ""} ${size}`} type={type}>
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

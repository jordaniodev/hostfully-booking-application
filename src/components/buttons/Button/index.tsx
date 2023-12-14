import ButtonCustom from "./Button.style";
import { ButtonProps } from "./Button.types";
export const Button = ({
  category = "outline",
  fullwidth,
  size = "large",
  children = ' ',
  icon,
  iconPosition = 'left',
  type = "button",
  aligncenter,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonCustom
      onClick={onClick}
      fullwidth={fullwidth ? 1 : 0}
      size={size}
      category={category}
      aligncenter={aligncenter ? 1 : 0}
      type={type}
      {...props}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </ButtonCustom>
  );
};

import { InputProps } from "./Input.types";
import "./Input.scss";

export const Input = ({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  min,
  max,
  onChange,
  category = 'slim',
}: InputProps) => {
  return (
    <div className="container-input">
      {label ? <label> {label} </label> : ""}
      <input onChange={onChange} type={type} placeholder={placeholder} className={category} min={min} max={max} value={value} />
      {icon ? icon : ""}
    </div>
  );
};

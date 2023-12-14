import { useRef } from "react";
import { InputProps } from "./Input.types";
import { InputGroup } from "react-bootstrap";
import { InputCustom, InputGroupIcon, LabelCustom } from "./Input.style";

export const Input = ({
  label,
  icon,
  required,
  name,
  category = "slim",
  id,
  ...props
}: InputProps) => {
  const inputForm = useRef<HTMLInputElement>();
  return (
    <InputGroup>
      {label ? <LabelCustom htmlFor={id}>{label}</LabelCustom> : ""}
      <InputCustom
        id={id}
        aria-label={label}
        required={required}
        icon={icon}
        category={category}
        name={name}
        aria-describedby="basic-addon1"
        {...props}
        ref={inputForm}
      />
      {icon && (
        <InputGroupIcon
          onClick={() => inputForm?.current?.focus()}
          category={category}
          id="basic-addon1"
        >
          {icon}
        </InputGroupIcon>
      )}
    </InputGroup>
  );
};

import { Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

export const InputCustom = styled(Form.Control)((props) => ({
  all: "unset",
  padding: "1rem",
  boxSizing: "border-box",
  width: "100%",
  height: "56px",
  minHeight: "1.2rem",
  backgroundColor: "#ffffff",
  display: "block",
  "-webkit-appearance": "textfield",
  "-moz-appearance": "textfield",
  borderRadius: props.icon
    ? "0.375rem 0 0 0.375rem !important"
    : "0.375rem !important",
  border: props.category === "outlined" ? "1px solid #79747E" : "none",
  borderRight: props.icon ? "none" : "1px solid #79747E",
  zIndex: 1,
  "&:focus": {
    border: props.category === "outlined" ? "1px solid #79747E" : "none",
    boxShadow: "none",
    borderRight: props.icon ? "none" : "1px solid #79747E",
  },
}));

export const InputGroupIcon = styled(InputGroup.Text)((props) => ({
  backgroundColor: "transparent",
  border: props.category === "outlined" ? "1px solid #79747E" : "none",
  borderLeft: "none",
}));

export const LabelCustom = styled(Form.Label)({
  fontSize: "0.875rem",
  fontWeight: 400,
  background: "#ffffff",
  padding: "0 2px",
  position: "absolute",
  top: "-8px",
  zIndex: 9,
  left: "8px",
  
});

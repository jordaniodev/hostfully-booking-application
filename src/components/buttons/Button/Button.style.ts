import { COLORS_THEME } from "../../../styles/variables";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

export const ButtonCustom = styled("button")<ButtonProps>((props) => ({
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  borderRadius: "8px",
  fontSize: "0.875rem",
  fontWeight: 600,
  cursor: "pointer",
  gap: "4px",

  padding: props.size === "large" ? "1rem 1.5rem" : "1rem",

  ...(props.category === "filled" && {
    backgroundColor: COLORS_THEME.bluePrimary,
    color: "#fff",
    border: "none",
  }),

  ...(props.category === "outline" && {
    color: COLORS_THEME.bluePrimary,
    backgroundColor: "transparent",
    border: "1px solid" + COLORS_THEME.bluePrimary,
  }),

  ...(props.category === "dark" && {
    color: "#ffffff",
    backgroundColor: COLORS_THEME.blueDark,
    border: "1px solid " + COLORS_THEME.bluePrimary,
  }),

  ...(props.category === "buy" && {
    color: "#ffffff",
    backgroundColor: COLORS_THEME.greenSecondary,
    justifyContent: "center",
  }),

  ...(props.category === "danger" && {
    color: "#ffffff",
    backgroundColor: COLORS_THEME.danger,
    justifyContent: "center",
  }),

  ...(props.category === "submit" && {
    color: "#ffffff",
    backgroundColor: COLORS_THEME.greenDark,
    justifyContent: "center",
  }),

  ...(props.fullwidth && {
    width: "100%",
    flex: 1,
  }),

  ...(props.aligncenter && {
    textAlign: "center",
    justifyContent: "center",
  }),
}));

export default ButtonCustom;

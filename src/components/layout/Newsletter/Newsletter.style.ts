import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";

export const NewsletterCustom = styled("div")({
  marginTop: "3rem",
  backgroundColor: COLORS_THEME.greenTertiary,
  padding: "0 1.5rem",
  borderRadius: "20px",
  minHeight: "300px",
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
});

export const ContainerTextNewsletter = styled("div")({
  maxWidth: "600px",
  "@media (max-width: 900px)": {
    maxWidth: "900px",
  },
  padding: "1.5rem 0",
});

export const SubTitleNewsletter = styled("h2")({
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "54px",
  maxWidth: "364px",
  marginBottom: "1.5rem",
});

export const ParagraphNewsletter = styled("p")({
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  marginBottom: "0.5rem",

  "&.bold": {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
});

export const FormNewsletter = styled("form")({
  display: "flex",
  gap: "0.5rem",

  "@media (max-width: 500px)": {
    flexDirection: "column",
  },
});

export const ImageNewSletter = styled("img")({
  "@media (max-width: 900px)": {
    display: "none",
  },
});

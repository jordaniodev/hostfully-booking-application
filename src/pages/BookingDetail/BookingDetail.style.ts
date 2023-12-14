import { Card } from "react-bootstrap";
import styled from "styled-components";
import { COLORS_THEME } from "../../styles/variables";

export const CardCustom = styled(Card)({
  boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.15)",
  borderRadius: "8px",
  border: "none",
  overflow: "hidden",

  "@media (max-width:700px)": {
    gridTemplateColumns: "1fr",
  },
});

export const TwoColumns = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 450px",
  gridTemplateRows: "180px 1fr",

  "@media (max-width:1000px)": {
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr ",
  },

  gap: "40px",
});

export const TitleCardCustom = styled(Card.Title)({
  display: "flex",
  gap: "24px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "32px 24px  0 24px",

  h3: {
    fontSize: "24px",
    fontWeight: 700,
  },

  ".description": {
    fontSize: "12px",
    fontWeight: 500,
    color: COLORS_THEME.bluePrimary,
  },

  ".description:last-child": {
    float: "right",
  },

  ".value": {
    fontSize: "24px",
    color: COLORS_THEME.greenSecondary,
    fontWeight: 700,

    ".night": {
      fontSize: "14px",
    },
  } as any,

  "@media (max-width:500px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

export const NoteValue = styled("span")({
  fontSize: "12px",
  fontWeight: 500,
  padding: "8px 12px",
  borderRadius: "4px",
  border: "1px solid " + COLORS_THEME.bluePrimary,
  color: COLORS_THEME.bluePrimary,
});

export const NoteContainer = styled("div")({
  marginTop: "12px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const NoteDescription = styled("span")({
  fontSize: "12px",
  fontWeight: 500,
  color: COLORS_THEME.bluePrimary,

  ".bold": {
    fontWeight: 700,
  },
});

export const DateContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "0 24px 32px 24px",
  alignItems: "center",

  "@media (max-width:500px)": {
    gap: "1rem",
    flexDirection: "column",
  },
});

export const Date = styled("div")({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  ".value": {
    fontSize: "20px",
    fontWeight: 600,
  },
  ".checkin": {
    fontSize: "14px",
    fontWeight: 500,
  },

  "@media (max-width:500px)": {
    "&:last-of-type": {
      alignSelf: "flex-end",
    },

    "&:first-of-type": {
      alignSelf: "flex-start",
    },
  } as any,
});

export const ContainerPrice = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  gridColumnStart: 2,
  gridColumnEnd: 3,
  gridRowStart: 1,
  gridRowEnd: 3,

  "@media (max-width:1000px)": {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    gridRowStart: 2,
    gridRowEnd: 3,
  },
});

export const CardPriceHeader = styled(Card.Header)({
  display: "flex",
  gap: "1.5rem",

  img: {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "4px",
  },

  h3: {
    fontSize: "16px",
    fontWeight: 500,
  },

  h2: {
    fontSize: "20px",
    fontWeight: 600,
  },
});

export const CardBodyPrice = styled(Card.Body)({
  h4: {
    fontSize: "1rem",
    fontWeight: 500,
  },

  ul: {
    all: "unset",
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: "normal",

    li: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "0.5rem",

      ".value": {
        fontWeight: 700,
      },
    },
  } as any,
});

export const ContainerButton = styled("div")({
  display: "flex",
  gap: "1rem",
});

export const ContainerFormSearch = styled("div")({
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRowStart: 2,
  gridRowEnd: 3,

  "@media (max-width:1000px)": {
    gridRowStart: 3,
    gridRowEnd: 4,
  },
});

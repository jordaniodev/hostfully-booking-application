import { rgba } from "polished";
import styled from "styled-components";
import { COLORS_THEME } from "../../../../styles/variables";

export const ReserveItemCustom = styled("div")({
  display: "flex",
  paddingBottom: "1rem",
  justifyContent: "space-between",
  borderBottom: "1px solid " + rgba(COLORS_THEME.greenDark, 0.25),
  gap: "1rem",
});

export const InfoReserveItem = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",

  p: {
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
});

export const RoomReserveItem = styled("img")({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
});

export const ReserveItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "1rem",
});

export const ActionReserveItem = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const DateReserveItem = styled("span")({
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
});

export const YearReserveItem = styled("span")({
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
});

export const ContainerButtonDesk = styled("div")({
  display: "flex",
  flexWrap: "nowrap",

  "@media (max-width:630px)": {
    display: "none",
  },
});

export const ContainerButtonMobile = styled("div")({
  display: "none",

  "@media (max-width:630px)": {
    display: "inherit",
  },
});

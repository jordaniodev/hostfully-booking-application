import styled from "styled-components";
import { COLORS_THEME } from "../../styles/variables";
import { Dropdown } from "react-bootstrap";

export const ContainerFormFilter = styled("div")({
  padding: "1.5rem",
  boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
  marginTop: "45px",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 64px",
  gap: "1rem",
  alignItems: "flex-end",

  "@media (max-width: 800px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 64px",
  },
});

export const ContainerButton = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
});



export const TwoColumnsFilter = styled("div")({
  display: "flex",
  gap: "1.5rem",
  marginTop: "2rem",
});


export const ContainerItems = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap:'1.5rem',
  flex: 1,
});

export const ContainerItemsHeader = styled("div")({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ShowInfoText = styled("p")({
  all: 'unset',
  fontSize: "14px",
  fontWeight: 600,
  color: COLORS_THEME.bluePrimary,

  span: {
    color: COLORS_THEME.greenSecondary,
  },
});

export const DropdownContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  span: {
    fontSize: "14px",
    fontWeight: 400,
    color: COLORS_THEME.bluePrimary,
  },
});

export const DropdownCustom = styled(Dropdown.Toggle)({
  all: "unset",
  fontSize: "14px",
  fontWeight: 600,
  color: COLORS_THEME.bluePrimary,

  "&:hover , &:active": {
    color: COLORS_THEME.bluePrimary,
    backgroundColor: "transparent",
  },
});

export const DropdownItemCustom = styled(Dropdown.Item)({
  fontSize: "14px",
});

import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";
import { Dropdown } from "react-bootstrap";

export const ContainerCards = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
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
  
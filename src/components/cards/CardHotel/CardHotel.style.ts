import { Card } from "react-bootstrap";
import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";

export const CardCustom = styled(Card)({
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    boxShadow: '0px 4px 16px 0px rgba(17, 34, 17, 0.15)',
    borderRadius: '8px',
    border: 'none',
    overflow: "hidden",
    
    '@media (max-width:700px)':{
      gridTemplateColumns: "1fr",
    }
  });
  
  export const ImageCardCustom = styled(Card.Img)({
    width: "300px",
    height: "300px",
    objectFit: "cover",
  
    '@media (max-width:700px)':{
      display: "none",
    }
  });
  
  export const TitleCardCustom = styled(Card.Title)({
    display: "flex",
    gap: "24px",
    justifyContent: "space-between",
    alignItems: "center",
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      color: COLORS_THEME.bluePrimary,
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
  });
  
  export const AddressCardCustom = styled("address")({
    fontSize: "12px",
    fontWeight: 500,
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    alignItems: "center",
    color: COLORS_THEME.bluePrimary,
  });
  
  export const FilterPinIconImage = styled("img")({
    width: "16px",
    height: "16px",
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
  
  export const CardFooterCustom = styled("div")({
    backgroundColor: "transparent",
    paddingTop: "1.5rem",
    borderTop: "0.5px solid  #2d2aa524",
    display: "flex",
    gap: '1rem'
  });
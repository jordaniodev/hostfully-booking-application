import { styled } from "styled-components";

export const ContainerInputGoogleMaps = styled("div")({
  position: "relative",
});

export const Options = styled("ul")({
  all: "unset",
  listStyle: "none",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  background: "#ffffff",
  position: "absolute",
  boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.15)",
  width: "100%",	
  top: "60px",
  zIndex: 10,
});

export const Option = styled("li")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "2rem",
  padding: "1.5rem",
  cursor: "pointer",
  gap:"4px",
  "&:first-child": {
    borderRadius: "8px 8px 0  0",
  },

  "&:last-child": {
    borderRadius: "0 0 8px 8px ",
  },

  "&:hover": {
    background:"#cccccc"
  }
});

export const OptionText = styled("span")({
  fontSize: "0.875rem",
  fontWeight: "normal",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

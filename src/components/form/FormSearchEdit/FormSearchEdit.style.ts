import styled from "styled-components";

export const FormContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1.5rem",

  "@media (max-width: 1300px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media (max-width: 500px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const ContainerPerson = styled("div")({
  display: "flex",
  gap: "1rem",
});

export const BoxFilter = styled("div")({
  padding: "2rem 1.5rem 3rem 1.5rem",
  backgroundColor: "#ffffff",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
});

export const FooterFilter = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  gridColumnStart: 0,
  marginTop: '1rem',
  gridColumnEnd: 5,
});

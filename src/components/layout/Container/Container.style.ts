import styled from "styled-components";

export const Container = styled("div")({
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 2rem",

  "@media (max-width: 900px)": {
    maxWidth: "760px",
    padding: "0 2rem",
  },

  "@media (max-width: 500px)": {
    maxWidth: "460px",
    padding: "0 2rem",
  },
});

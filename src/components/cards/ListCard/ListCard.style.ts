import styled from "styled-components";

export const ContainerCards = styled("div")({
  display: "flex",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  overflowX: "auto",
  paddingBottom: "1rem",
});

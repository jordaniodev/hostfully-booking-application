import styled, { keyframes, css } from "styled-components";
import { COLORS_THEME } from "./../../../styles/variables";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "2rem 0",
});

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 10px solid ${COLORS_THEME.bluePrimary}; /* Light grey */
  border-top: 10px solid ${COLORS_THEME.blueDark}; /* Black */
  border-radius: 50%;
  animation: ${spinAnimation} 1.5s linear infinite;
  opacity: 0.5;
`;

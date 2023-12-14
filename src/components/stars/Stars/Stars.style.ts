import { styled } from 'styled-components';
import { COLORS_THEME } from '../../../styles/variables';

export const StartContainer = styled("div")({
  display: "flex",
  gap: "2px",
  alignItems: "center",

  img: {
    height: "16px",
    width: "16px",
  },
  span: {
    fontSize: "12px",
    fontWeight: 500,
    color: COLORS_THEME.bluePrimary,
    marginLeft: "6px",
    lineHeight: 1,
  },
});

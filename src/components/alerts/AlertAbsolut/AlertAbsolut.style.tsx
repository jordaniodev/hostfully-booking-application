import { AlertOutlet } from "react-bootstrap-hooks-alert";
import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";

export const AlertCustom = styled(AlertOutlet)({
  position: "absolute",
  top: "8px",
  width: "40%",
  right: "2rem",
  zIndex: 99,

  ".alert-success": {
    backgroundColor: COLORS_THEME.greenSecondary,
    color: "#ffffff",
  },

  ".alert-info": {
    backgroundColor: COLORS_THEME.bluePrimary,
    color: "#ffffff",
  },

  ".alert-error": {
    backgroundColor: COLORS_THEME.danger,
    color: "#ffffff",
  },
});

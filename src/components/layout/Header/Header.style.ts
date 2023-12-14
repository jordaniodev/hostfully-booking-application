import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";

export const HeaderContainer = styled.header({
  width: "100%",
});

export const HeaderContent = styled.div({
  height: "90px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 3rem",
});

export const LogoHeader = styled.img({
  position: "absolute",
  left: "50%",
  marginLeft: "-55px",
  cursor: "pointer",
});

export const NavListHeader = styled.ul({
  listStyle: "none",
  display: "flex",
  height: "90px",
  gap: "2rem",

  "@media (max-width: 500px)": {
    display: "none",
  },
});

export const NavItemHeader = styled('li')((props: any) => ({
  height: "90px",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  gap: "4px",
  alignItems: "center",
  flexWrap: "nowrap",

  borderBottom: `${props.selected}5px solid ${COLORS_THEME.bluePrimary}`,

  a: {
    "@media (max-width: 900px)": {
      display: "none",
    },
  } as any,
}));

export const LoginContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2rem",

  a: {
    all: "unset",
    color: COLORS_THEME.bluePrimary,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    cursor: "pointer",
    lineHeight: "normal",
  },

  "@media (max-width: 500px)": {
    display: "none",
  },

  "@media (max-width: 900px)": {
    display: "none",
  },

  "&.mobile": {
    display: "none",

    "@media (max-width: 900px)": {
      display: "inherit",
    },

    "@media (max-width: 500px)": {
      display: "none",
    },
  } as any,
});

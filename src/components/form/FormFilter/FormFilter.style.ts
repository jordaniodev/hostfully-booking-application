import styled from "styled-components";
import { COLORS_THEME } from "../../../styles/variables";
import { Accordion, Form } from "react-bootstrap";
import ReactSlider from "react-slider";


export const ContainerFilter = styled("div")({
  width: "340px",

  h3: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    color: COLORS_THEME.bluePrimary,
    marginBottom: "2rem",
  },

  "@media (max-width: 1000px)": {
    display: "none",
  },
});

export const RatingButtonContainer = styled("div")({
    display: "flex",
    gap: "1rem",
  });
  

export const RatingButton = styled("button")<{active: boolean}>((props) => ({
    all: "unset",
    border: "1px solid " + COLORS_THEME.bluePrimary,
    color: props.active ? "#ffffff" : COLORS_THEME.bluePrimary,
    borderRadius: "4px",
    fontSize: "12px",
    width: "40px",
    backgroundColor: props.active ? COLORS_THEME.bluePrimary : "transparent",
    textAlign: "center",
    height: "32px",
  }));

export const CheckboxCustom = styled(Form.Check)({
    label: {
      fontSize: "14px",
      fontWeight: 500,
      color: COLORS_THEME.bluePrimary,
    },
  
    input: {
      borderColor: COLORS_THEME.bluePrimary,
    },
  });

export const FilterAccordion = styled(Accordion)({
  marginTop: "2rem",
});

export const FilterItem = styled(Accordion.Item)({
  border: "none",
});

export const FilterItemTitle = styled(Accordion.Header)({
  button: {
    color: COLORS_THEME.bluePrimary,
    paddingLeft: 0,

    "&:not(.collapsed)": {
      backgroundColor: "#ffffff",
      boxShadow: "none",
    },
  } as any,
});

export const FilterItemBody = styled(Accordion.Body)({
  padding: "2.5rem 0.5rem",
});

export const FilterItemBodyCheckbox = styled(FilterItemBody)({
  display: "flex",
  flexDirection: "column",
});

export const SliderPrice = styled(ReactSlider)({
  ".price-track": {
    border: "1px solid " + COLORS_THEME.bluePrimary,
    top: "26px",
  },
  ".price-thumb": {
    width: "52px",
    height: "52px",
    fontSize: "12px",
    borderRadius: "50%",
    backgroundColor: COLORS_THEME.bluePrimary,
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
  },
});

export const DividerFilter = styled("hr")({
  margin: "2rem 0",
});

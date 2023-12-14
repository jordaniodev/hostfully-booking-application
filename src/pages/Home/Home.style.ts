import styled from "styled-components";
import heroSlideImage from "../../assets/img/heroSlide.jpeg";
import placeTogether from "../../assets/img/place-together.svg";
import { COLORS_THEME } from "../../styles/variables";
export const HeroSlide = styled("div")({
  backgroundImage: `url(${heroSlideImage})`,
  height: "540px",
  backgroundPosition: "top center",
  backgroundSize: "cover",
  padding: "80px 0",
  boxSizing: "border-box",

  h1: {
    fontSize: "45px",
    color: "#FFFFFF",
    fontStyle: "normal",
    maxWidth: "440px",
    fontWeight: 700,
    lineHeight: "normal",

    "@media (max-width: 500px)": {
      fontSize: "36px",
    },
  } as any,

  p: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
});

export const ContainerFormFilterSecondary = styled("div")({
  marginTop: "-104px",
});

export const PlaceTogether = styled("div")({
  marginTop: "5rem",
});

export const HeaderPlaceTogether = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  h2: {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },

  p: {
    marginTop: "1rem",
  },
});

export const FallTravel = styled("section")({
  marginTop: "80px",
});

export const HeaderFallTravel = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
});

export const ContainerActionFallTravel = styled("div")({
  minWidth: "104px",

  "@media (max-width: 600px)": {
    display: "none",
  },
});

export const MapFallTravel = styled("div")({
  backgroundImage: `url(${placeTogether})`,
  height: "800px",
  backgroundSize: "cover",
  marginTop: "1.5rem",
  backgroundPosition: "center",
});

export const GridImages = styled("div")({
  display: "grid",
  gridTemplateColumns: "400px 1fr 1fr",
  gridTemplateRows: "200px 200px",
  gap: "1rem",

  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr 1fr",

    "img:nth-child(3),img:nth-child(4)": {
      display: "none",
    },
  } as any,

  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",

    img: {
      display: "none",
    },
  } as any,
});

export const SimpleCard = styled('div')({
  gridColumnStart: 1,
  gridColumnEnd: 2,
  gridRowStart: 1,
  gridRowEnd: 3,
  backgroundColor: COLORS_THEME.bluePrimary,
  padding: '1.5rem',
  borderRadius: '20px',
  color: '#ffffff',
});

export const HeaderSimpleCard = styled('div')({
  display: 'flex',
  alignItems: 'flex-start'
});

export const PriceSimpleCard = styled('div')({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  color: '#000000',
  padding: '8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
})

export const TitlePriceSimpleCard = styled('span')({
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
})

export const ValuePriceSimpleCard = styled('span')({
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
})

export const ParagraphSimpleCard = styled('p')({
  color: 'FAFBFC',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
})

export const ImageCardGridImages = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px'
})

export const FooterFall = styled('div')({
  margin: '1rem 0',
  display: 'none',

  '@media (max-width: 600px)': {
    display: 'inherit',
  }
});

export const Reservations = styled('div')({
    margin: '2rem 0'
})
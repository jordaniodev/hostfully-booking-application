import { useState } from 'react';
import {
  ContainerFilter,
  CheckboxCustom,
  DividerFilter,
  FilterAccordion,
  FilterItem,
  FilterItemBody,
  FilterItemBodyCheckbox,
  FilterItemTitle,
  RatingButton,
  RatingButtonContainer,
} from "./FormFilter.style";
import { HOTELS_DATA } from "../../../hooks/Hotels/useHotels.data";


export const FormFilter = () => {
  const [activeStars, setActiveStars] = useState<number[]>([])
  const [activeHotelNames, setActiveHotelNames] = useState<string[]>([])
  
  const onFilterByStars = (star: number) => {
    let activeStarsActual = [...activeStars];
    (activeStars.includes(star)) ? activeStarsActual = activeStarsActual.filter(activeStar => star !== activeStar) : activeStarsActual.push(star);
    setActiveStars([...activeStarsActual])
  }
  
  const onFilterByHotelName = (checked: boolean, hotelName: string) => {
    const newHotelNameList = checked ? [...activeHotelNames, hotelName] : activeHotelNames.filter((activeHotelName) => hotelName !== activeHotelName);
    setActiveHotelNames(newHotelNameList);
  }

  return (
    <ContainerFilter>
      <FilterAccordion defaultActiveKey="0">
        <FilterItem eventKey="0">
          <FilterItemTitle>Stars</FilterItemTitle>
          <FilterItemBody>
            <RatingButtonContainer>
              {Array(5).fill('').map((_, indexValue) => {
                return <RatingButton onClick={() => onFilterByStars(indexValue + 1)}  active={activeStars.includes(indexValue + 1)}>{indexValue + 1}</RatingButton>
              })}
            </RatingButtonContainer>
          </FilterItemBody>
        </FilterItem>
      </FilterAccordion>
      <DividerFilter />
      <FilterAccordion defaultActiveKey="0">
        <FilterItem eventKey="0">
          <FilterItemTitle>Hotels</FilterItemTitle>
          <FilterItemBodyCheckbox>
            {HOTELS_DATA.map((hotel) => {
              return <CheckboxCustom id={`id-${hotel.id}`} inline label={hotel.name} type="checkbox" onChange={(value) => onFilterByHotelName(value.target.checked, hotel.name)} />
            })}
          </FilterItemBodyCheckbox>
        </FilterItem>
      </FilterAccordion>
      <DividerFilter />
      <FilterAccordion defaultActiveKey="0">
        <FilterItem eventKey="0">
          <FilterItemTitle>Amenities</FilterItemTitle>
          <FilterItemBodyCheckbox>
            <CheckboxCustom inline label="24hr front desk" type="checkbox" />
            <CheckboxCustom inline label="Free parking" type="checkbox" />
            <CheckboxCustom inline label="Air-conditioned" type="checkbox" />
            <CheckboxCustom inline label="Fitness" type="checkbox" />
            <CheckboxCustom inline label="Pool" type="checkbox" />
          </FilterItemBodyCheckbox>
        </FilterItem>
      </FilterAccordion>
    </ContainerFilter>
  );
};

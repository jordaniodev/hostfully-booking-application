import { useHotel } from "../../../hooks/Hotels/useHotels";
import {
  ContainerCards,
  ContainerItemsHeader,
  DropdownContainer,
  DropdownCustom,
  DropdownItemCustom,
  ShowInfoText,
} from "./ListCardHotel.style";
import { CardHotel } from "../CardHotel";
import { Loading } from "../../layout/Loading";
import { Button } from "../../buttons/Button";
import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { HotelFilterBy } from "../../../hooks/Hotels/useHotels.types";

export const ListCardHotel = () => {
  const [pagination, setPagination] = useState(5);
  const { Hotels, isLoading, sortBy } = useHotel();
  const [sortByValue, setSortBy] = useState<HotelFilterBy>("recommended");

  useEffect(() => {
    sortBy(sortByValue);
  }, [sortByValue]);

  const onSortBy = (sortByValue: HotelFilterBy) => {
    setSortBy(sortByValue);
    sortBy(sortByValue);
  };

  const sortByDescription: any = {
    price: "Price",
    recommended: "Recommended",
    quantityStar: "Hotel Stars",
    quantityReviews: "Avaliation",
  };
  return (
    <>
      <ContainerItemsHeader>
        <ShowInfoText>
          Showing {pagination} of <span>{Hotels.length} places</span>{" "}
        </ShowInfoText>
        <DropdownContainer>
          <span>Sort by</span>
          <Dropdown>
            <DropdownCustom>
              {sortByDescription[sortByValue]}
            </DropdownCustom>
            <Dropdown.Menu>
              <DropdownItemCustom onClick={() => onSortBy("price")}>
                Price
              </DropdownItemCustom>
              <DropdownItemCustom onClick={() => onSortBy("quantityStar")}>
                Hotel Stars
              </DropdownItemCustom>
              <DropdownItemCustom onClick={() => onSortBy("quantityReviews")}>
                Avaliation
              </DropdownItemCustom>
            </Dropdown.Menu>
          </Dropdown>
        </DropdownContainer>
      </ContainerItemsHeader>
      {isLoading && <Loading />}
      {!Hotels.length && <p>Any Hotel finded!</p>}
      <ContainerCards>
        {!isLoading &&
          Hotels.slice(0, pagination).map((hotel, index) => (
            <CardHotel card={hotel} key={index} />
          ))}
      </ContainerCards>
      <div className="footer-list">
        {Hotels.length > pagination && (
          <Button
            fullwidth={true}
            aligncenter
            category="dark"
            onClick={() => setPagination(pagination + 5)}
          >
            Show more results
          </Button>
        )}
      </div>
    </>
  );
};

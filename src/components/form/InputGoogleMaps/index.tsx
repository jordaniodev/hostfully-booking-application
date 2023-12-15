import { useState } from "react";
import { Input } from "../Input";
import pinIcon from "./../../../assets/img/icons/pin.svg";
import searchIcon from "./../../../assets/img/icons/search.svg";
import {
  ContainerInputGoogleMaps,
  Option,
  OptionText,
  Options,
} from "./InputGoogleMaps.style";
import { GoogleMapsItems } from "./InputGoogleMaps.type";
import { InputProps } from "../Input/Input.types";

export const InputGoogleMaps = ({
  name,
  defaultValue,
}: InputProps) => {
  const [autocompleteResults, setAutocompleteResults] =
    useState<GoogleMapsItems[]>();
  const [searchTerm, setSearchTerm] = useState("");

  const apiUrl = (value: string) =>
    `https://corsproxy.io/?https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=(cities)&key=AIzaSyBBpu7tgz23J3x3ldV3xxG1oFdPx_p4Cl4`;

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    if(value ==='') setSearchTerm(' ');
    fetch(apiUrl(value))
      .then((response) => response.json())
      .then((data) => {
        setAutocompleteResults(data.predictions);
      })
      .catch((error) => {
        console.error("Error fetching autocomplete results:", error);
      });
  };

  const selectOption = (optionSelected: string) => {
    setSearchTerm(optionSelected);
    setAutocompleteResults([]);
  };
  
  return (
    <ContainerInputGoogleMaps>
      <Input
        required={true}
        placeholder="Choice the place"
        label="Where"
        name={name}
        icon={<img src={searchIcon} alt="search" />}
        category="outlined"
        defaultValue={defaultValue}
        value={((searchTerm) ? searchTerm : defaultValue) as string}
        id="choice-place"
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Options>
        {autocompleteResults &&
          autocompleteResults.slice(0, 5).map((result) => (
            <Option
              title={result.description}
              key={result.place_id}
              onClick={() => selectOption(result.description)}
            >
              <img src={pinIcon} alt="" />
              <OptionText>{result.description}</OptionText>
            </Option>
          ))}
      </Options>
    </ContainerInputGoogleMaps>
  );
};

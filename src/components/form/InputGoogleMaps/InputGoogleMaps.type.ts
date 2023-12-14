import { InputProps } from "../Input/Input.types";

export interface InputGoogleMapsProps extends InputProps {
    onSelectOption: (optionSelected: string) => void
}


export interface GoogleMapsItems {
    place_id: number;
    description: string;
}
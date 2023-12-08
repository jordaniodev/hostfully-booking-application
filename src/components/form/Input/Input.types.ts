import { ReactElement } from "react";

export interface InputProps {
    placeholder?: string;
    icon?: ReactElement;
    label?: string;
    onChange?: (event: any) => void;
    min?:string;
    max?:string;
    type?: 'email' | 'text' | 'date';
    category?: 'slim' | 'outlined';
    value?: string;
}
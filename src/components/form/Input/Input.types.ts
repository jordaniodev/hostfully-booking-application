import { ReactElement } from "react";
import { FormControlProps } from "react-bootstrap";

export interface InputProps extends FormControlProps {
    label?: string;
    icon?: ReactElement;
    min?: string;
    name?: string;
    required?: boolean;
    placeholder?: string;
    max?: string;
    type?: 'email' | 'text' | 'date' | 'number';
    category?: 'slim' | 'outlined';
}
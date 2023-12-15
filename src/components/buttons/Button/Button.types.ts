import { ReactElement, ReactNode } from "react";

export interface ButtonProps{
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    category?: ButtonCategory;
    fullwidth?: number | boolean;
    aligncenter?: number | boolean;
    onClick?: () => void;
    children?: ReactNode;
    type?: 'button' | 'submit';
}


export type ButtonCategory = 'filled' | 'outline' | 'submit' | 'buy' | 'dark' | 'danger';
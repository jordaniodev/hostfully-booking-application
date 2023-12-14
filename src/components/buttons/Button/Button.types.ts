import { ReactElement, ReactNode } from "react";

export interface ButtonProps{
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    category?: 'filled' | 'outline' | 'submit' | 'buy' | 'dark' | 'danger';
    fullwidth?: number | boolean;
    aligncenter?: number | boolean;
    onClick?: () => void;
    children?: ReactNode;
    type?: 'button' | 'submit';
}

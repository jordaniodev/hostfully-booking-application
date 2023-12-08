import { ReactElement } from 'react';

export type ButtonProps  = {
    icon?: ReactElement;
    iconPosition?: 'left' | 'right';
    size?: 'small' | 'medium' | 'large';
    children: string;
    category?: 'filled' | 'outline' | 'submit' | 'buy' | 'dark' | 'danger'	;
    fullWidth?: boolean;
    alingCenter?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}
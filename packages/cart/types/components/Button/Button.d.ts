import { ButtonSize, ButtonType, ButtonVariant } from '@components/Button/types';
import { motion } from 'framer-motion';
import React from 'react';
interface ButtonProps extends React.ComponentPropsWithRef<typeof motion.button> {
    children: React.ReactNode;
    size?: ButtonSize;
    variant?: ButtonVariant;
    type?: ButtonType;
    prefixIconURL?: string;
    suffix?: number | null;
    loading?: boolean;
    disabled?: boolean;
}
declare function Button({ variant, size, type, loading, disabled, children, prefixIconURL, suffix, ...props }: ButtonProps): JSX.Element;
export default Button;

import 'styles/globals.css';
import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export interface StepperProps extends HTMLMotionProps<'input'> {
    min?: number;
    max?: number;
    textFieldDisabled?: boolean;
    onIncrease?: React.MouseEventHandler<HTMLButtonElement>;
    onDecrease?: React.MouseEventHandler<HTMLButtonElement>;
}
export type Actions = 'INCREASE' | 'DECREASE';
declare const _default: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLInputElement | null>>;
export default _default;

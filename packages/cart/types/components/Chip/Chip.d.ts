/// <reference types="react" />
import { ButtonVariant } from '@components/Button/types';
import { motion } from 'framer-motion';
interface ChipProps extends React.ComponentPropsWithRef<typeof motion.div> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}
declare function Chip({ variant, children, ...props }: ChipProps): JSX.Element;
export default Chip;

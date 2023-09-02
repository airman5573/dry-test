import { ButtonSize, ButtonVariant } from '@components/Button/types';
import { FlattenSimpleInterpolation } from 'styled-components';
interface getButtonPaddingParams {
    variant: ButtonVariant;
    size: ButtonSize;
    hasPrefix: boolean;
    hasSuffix: boolean;
}
export declare const getButtonPadding: ({ variant, size, hasPrefix, hasSuffix }: getButtonPaddingParams) => FlattenSimpleInterpolation;
export {};

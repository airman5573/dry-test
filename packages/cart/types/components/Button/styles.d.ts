import { ButtonSize, ButtonVariant } from '@components/Button/types';
import { FlattenSimpleInterpolation } from 'styled-components';
export declare const ButtonStyles: {
    Type: {
        primary: FlattenSimpleInterpolation;
        secondary: FlattenSimpleInterpolation;
        plain: FlattenSimpleInterpolation;
    };
    Font: {
        large: FlattenSimpleInterpolation;
        medium: FlattenSimpleInterpolation;
        small: FlattenSimpleInterpolation;
    };
};
export declare const ButtonPadding: {
    large: {
        normal: {
            topBottom: number;
            left: number;
            right: number;
        };
        prefix: {
            topBottom: number;
            left: number;
            right: number;
        };
        suffix: {
            topBottom: number;
            left: number;
            right: number;
        };
        affix: {
            topBottom: number;
            left: number;
            right: number;
        };
    };
    medium: {
        normal: {
            topBottom: number;
            left: number;
            right: number;
        };
        prefix: {
            topBottom: number;
            left: number;
            right: number;
        };
        suffix: {
            topBottom: number;
            left: number;
            right: number;
        };
        affix: {
            topBottom: number;
            left: number;
            right: number;
        };
    };
    small: {
        normal: {
            topBottom: number;
            left: number;
            right: number;
        };
        prefix: {
            topBottom: number;
            left: number;
            right: number;
        };
        suffix: {
            topBottom: number;
            left: number;
            right: number;
        };
        affix: {
            topBottom: number;
            left: number;
            right: number;
        };
    };
};
export declare const PrefixSize: {
    large: FlattenSimpleInterpolation;
    medium: FlattenSimpleInterpolation;
    small: FlattenSimpleInterpolation;
};
export declare const S: {
    Button: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLButtonElement, import("framer-motion").HTMLMotionProps<"button">>, any, {
        size: ButtonSize;
        variant: ButtonVariant;
        padding: FlattenSimpleInterpolation;
        disabled: boolean;
        prefixIcon: boolean;
    }, never>;
    LoadingWrapper: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, any, {
        variant: ButtonVariant;
        size: ButtonSize;
    }, never>;
    PrefixIconWrapper: import("styled-components").StyledComponent<"div", any, {
        variant: ButtonVariant;
        size: ButtonSize;
    }, never>;
    ButtonTextWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
};

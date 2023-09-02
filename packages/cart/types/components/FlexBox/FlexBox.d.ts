/// <reference types="react" />
export interface FlexBoxProps {
    direction?: React.CSSProperties['flexDirection'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    gap?: 'small' | 'medium' | 'large';
}
declare const FlexBox: import("styled-components").StyledComponent<"div", any, FlexBoxProps, never>;
export default FlexBox;

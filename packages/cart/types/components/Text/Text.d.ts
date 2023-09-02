/// <reference types="react" />
export interface TextProps {
    weight?: React.CSSProperties['fontWeight'];
    size?: number;
}
declare const Text: import("styled-components").StyledComponent<"p", any, TextProps, never>;
export default Text;

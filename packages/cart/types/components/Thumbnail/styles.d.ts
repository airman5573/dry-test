import { ThumbnailSize } from '@components/Thumbnail/types';
export declare const ThumbnailStyles: {
    Size: {
        large: import("styled-components").FlattenSimpleInterpolation;
        medium: import("styled-components").FlattenSimpleInterpolation;
        small: import("styled-components").FlattenSimpleInterpolation;
    };
};
export declare const S: {
    Thumbnail: import("styled-components").StyledComponent<"img", any, {
        size: ThumbnailSize;
        objectFit: React.CSSProperties['objectFit'];
        isTransparent: boolean;
        isCursorPointer: boolean;
    }, never>;
};

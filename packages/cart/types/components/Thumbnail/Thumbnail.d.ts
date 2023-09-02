/// <reference types="react" />
import { ThumbnailSize } from '@components/Thumbnail/types';
interface ThumbnailProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    size?: ThumbnailSize;
    objectFit?: React.CSSProperties['objectFit'];
    isTransparent?: boolean;
    isCursorPointer?: boolean;
}
declare function Thumbnail({ size, objectFit, isTransparent, isCursorPointer, ...props }: ThumbnailProps): JSX.Element;
export default Thumbnail;

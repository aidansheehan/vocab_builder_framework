import IMAGES_CONSTANT      from './constants/images.constant'

/** ImageComponentProps */
//@ts-ignore
type ImageComponentProps = {

    /** Image ID */
    id: keyof typeof IMAGES_CONSTANT,

    /** Additional styles to apply to image */
    style?: string,

    /** Child Components */
    children?: JSX.Element

}

/**
 * Component for displaying an image
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * const id = "foo"
 * const style = "class-name"
 * return (
 *   <ImageComponent id={id} style={style} />
 * )
 */
const ImageComponent = (props: ImageComponentProps): JSX.Element => {

    const { id, style, children } = props   //Destructure props

    return (
        <img src={IMAGES_CONSTANT[id]} className={style}>
            {children}
        </img>
    )
}

export default ImageComponent
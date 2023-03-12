import IMAGES_CONSTANT from '../../image/constants/images.constant'
import ImageComponent   from '../../image/image.component'
import TextComponent    from '../../text/text.component'
import styles           from './carousel.item.component.scss'

/** CarouselItemComponentProps */
export type CarouselItemComponentProps = {

    /** Image to display */
    image: keyof typeof IMAGES_CONSTANT,

    /** Title text reference */
    title: string,

    /** Array of texts to display */
    texts: Array<string>
}

/**
 * Component to display a single item within a carousel
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <CarouselItemComponent />
 * )
 */
const CarouselItemComponent = (props: CarouselItemComponentProps): JSX.Element => {

    const { image, title, texts } = props   //Destructure props

    return (
        <div className={styles.carouselItem} >

            <ImageComponent id={image} style={styles.carouselImage} />

            <TextComponent textRef={title} style={styles.carouselItemTitle} />

            {
                texts.map((t_, i_) => (
                    <TextComponent textRef={t_} key={i_} style={styles.carouselItemText}/>
                ))
            }

        </div>
    )


}

export default CarouselItemComponent
import CarouselItemComponent, { CarouselItemComponentProps }   from './components/carousel.item.component'
import styles                           from './carousel.component.scss'

/** CarouselComponentProps */
type CarouselComponentProps = {
    config: CarouselItemComponentProps[]
}

/**
 * Component to display images and text as a carousel
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <CarouselComponent />
 * )
 */
const CarouselComponent = (props: CarouselComponentProps) => {

    const { config } = props    //Destructure props

    return (
        <div className={styles.carousel} >
            {
                config.map((c_, i_) => (
                    <CarouselItemComponent key={i_} image={c_.image} title={c_.title} texts={c_.texts} />
                ))
            }
        </div>
    )

}

export default CarouselComponent
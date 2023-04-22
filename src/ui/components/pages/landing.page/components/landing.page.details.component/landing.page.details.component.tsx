import CarouselComponent            from '../../../../carousel/carousel.component'
import { LANDING_CAROUSEL_CONFIG }  from '../../constants/landing.page.carousel-config.constant'
import styles                       from './landing.page.details.component.scss'


/**
 * Details component for landing page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <LandingPageDetailsComponent />
 * )
 */
const LandingPageDetailsComponent = (): JSX.Element => {

    return (
        <div className={styles.landingPageDetails} >

            <CarouselComponent config={LANDING_CAROUSEL_CONFIG} />

        </div>
    )
}

export default LandingPageDetailsComponent
import CarouselComponent            from '../../../../carousel/carousel.component'
import TextComponent                from '../../../../text/text.component'
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

            <div className={styles.landingPageTitleSection} >

                <TextComponent textRef='landing-page_heading_primary' />

            </div>

            <CarouselComponent config={LANDING_CAROUSEL_CONFIG} />

        </div>
    )
}

export default LandingPageDetailsComponent
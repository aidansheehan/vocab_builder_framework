import TextComponent from '../../../../text/text.component'
import styles from './landing.page.details.component.scss'

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
            <p>Hello</p>
            <p>World</p>
        </div>
    )
}

export default LandingPageDetailsComponent
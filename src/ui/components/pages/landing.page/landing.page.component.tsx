import LandingPageCtaComponent          from './components/landing.page.cta.component/landing.page.cta.component'
import LandingPageDetailsComponent      from './components/landing.page.details.component/landing.page.details.component'
import styles                           from './landing.page.component.scss'

/**
 * Landing (!auth) Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <LandingPageComponent />
 * )
 */
const LandingPageComponent = () => {

    return (
        <div data-testid='landing-page' className={styles.landingPage} >

            <LandingPageCtaComponent />

            <LandingPageDetailsComponent />
            
        </div>
    )
}

export default LandingPageComponent
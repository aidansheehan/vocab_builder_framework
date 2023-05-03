import LandingPageCtaComponent          from './components/landing.page.cta.component/landing.page.cta.component'
import LandingPageFeaturesComponent     from './components/landing.page.features.component/landing.page.features.component'
import LandingPageFooterComponent       from './components/landing.page.footer.component/landing.page.footer.component'
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

            <LandingPageFeaturesComponent />

            <LandingPageFooterComponent />
            
        </div>
    )
}

export default LandingPageComponent
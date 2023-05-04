import { useNavigate }              from 'react-router-dom'
import { APP_NAME }                 from '../../../../constants/app-name.constant'
import ButtonComponent              from '../../../../components/button/button.component'
import LocaleSelectorComponent      from '../../../../components/locale-selector/locale-selector.component'
import TextComponent                from '../../../../components/text/text.component'
import styles                       from './landing.page.footer.component.scss'

/**
 * Additional footer with CTA and locale selector for landing page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * return (
 *   <LandingPageFooterComponent />
 * )
 * TODO will have contact info, about us (me), link to FAQs, link to report a bug or request a feature
 */
const LandingPageFooterComponent = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.landingPageFooter} >

            <div className={styles.landingPageCta} >
                <TextComponent textRef='footer_cta' values={[APP_NAME]} title style={styles.landingPageCtaText}/>
                <ButtonComponent primary style={styles.landingPageCtaBtn} onClick={() => navigate('/auth/register', {state: {backgroundLocation: location}})} textRef='landing-page_cta_register' />
            </div>

            <hr />

            <LocaleSelectorComponent style={styles.footerLocaleSelector} />
        </div>

    )
}

export default LandingPageFooterComponent
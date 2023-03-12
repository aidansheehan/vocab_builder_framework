import { useLocation, useNavigate }  from 'react-router-dom'
import ButtonComponent  from '../../../../button/button.component'
import ImageComponent   from '../../../../image/image.component'
import LogoComponent    from '../../../../logo.component/logo.component'
import TextComponent    from '../../../../text/text.component'
import styles           from './landing.page.cta.component.scss'

/**
 * Component to display landing page call to action
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <LandingPageCtaComponent />
 * )
 */
const LandingPageCtaComponent = (): JSX.Element => {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={styles.cta} >

            <ImageComponent id='placeholder' style={styles.ctaImage} />

            <div className={styles.ctaContent} >
            
                <LogoComponent style={styles.ctaLogo} />

                <TextComponent textRef='landing-page_cta-text' style={styles.ctaText}/>

            </div>

            <ButtonComponent primary onClick={() => navigate('/auth/register', {state: {backgroundLocation: location}})} textRef='landing-page_cta_button' />

        </div>
    )

}

export default LandingPageCtaComponent
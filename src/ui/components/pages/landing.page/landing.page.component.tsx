import { Link, useLocation }    from 'react-router-dom'
import TextComponent            from '../../text/text.component'

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

    const location = useLocation()

    return (
        <div data-testid='landing-page' >
            {/* TODO remove but leaving in for reference after holiday incase any benefits to using link component */}
            <Link to={`/auth/login`} state={{backgroundLocation: location}} >Log In Click Me I Work as Modal</Link>
            <p>
                <TextComponent textRef='landing_text_1' />
            </p>
            <p>
                <TextComponent textRef='landing_text_2' />
            </p>
            <p>
                <TextComponent textRef='landing_text_3' />
            </p>
            <p>
                <TextComponent textRef='landing_text_4' />
            </p>
        </div>
    )
}

export default LandingPageComponent
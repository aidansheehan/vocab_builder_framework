import TextComponent from "../../components/text/text.component"

/**
 * Landing (!auth) Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <LandingPage />
 * )
 */
const LandingPage = () => {

    return (
        <div data-testid='landing-page' >
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

export default LandingPage
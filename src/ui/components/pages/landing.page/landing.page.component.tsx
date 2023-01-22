import { useState } from 'react'
import TextInputComponent from '../../text-input/text-input.component'
import TextComponent from '../../text/text.component'

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
    
    const [ testValue, setTestValue ] = useState<string>('')

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

            <TextInputComponent value={testValue} setValue={setTestValue} />

        </div>
    )
}

export default LandingPageComponent
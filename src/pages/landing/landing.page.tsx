import ButtonComponent from '../../components/button/button.component'
//@ts-ignore
import  globalStyles from '../../global.scss'

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
        <div>
            I am the Landing Page.

            <ButtonComponent 
            style={globalStyles.buttonPrimary}
            textRef={'Click Me'}
            onClick={() => alert('I got clicked!')}
            />
        </div>
    )
}

export default LandingPage
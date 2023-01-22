//Components
import LoginFormComponent from '../../login-form/login-form.component'
//Styles
import styles from './login.page.component.scss'

/**
 * Login Page Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <LoginPageComponent />
 * )
 */
const LoginPageComponent = (): JSX.Element => {

    return (

        <div className={styles.loginPage} >

            <div className={styles.loginImage} >

            </div>

            <div className={styles.loginContent}>
                
                <LoginFormComponent />

            </div>

        </div>

    )
}

export default LoginPageComponent
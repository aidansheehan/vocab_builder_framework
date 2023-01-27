import classNames from 'classnames'
import { useRef }                   from 'react'
import { useForm }                  from 'react-hook-form'
import { useIntl } from 'react-intl'
import { NavLink } from 'react-router-dom'
import { useNavigate }              from 'react-router-dom'
import { UserLoginRequestType }     from '../../../redux/features/user/types/request.types'
import { userLogin }                from '../../../redux/features/user/user.actions'
import useAppDispatch               from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector               from '../../hooks/redux/use-app-selector.hook'
import ButtonPrimaryComponent       from '../button/components/button-primary.component'
import TextComponent                from '../text/text.component'
import styles                       from './login-form.component.scss'


/**
 * Form component to handle login
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *  <LoginFormComponent />
 * )
 */
const LoginFormComponent = (): JSX.Element => {

    const { loading, error }            = useAppSelector(state => state.user)   //Pull out user state values to handle UI state
    const { register, handleSubmit }    = useForm()                             //Get useForm methods for validation

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Function to submit login form TODO - is this being called? Work out logic here
    const submitForm = (data: UserLoginRequestType) => {

        dispatch(userLogin(data))
    }

    //Reference for login form
    const formRef = useRef<HTMLFormElement>(null)

    //Translate placeholder messages for input components TODO centralize this logic
    const intl = useIntl()


    return (

        <div className={styles.login}>
            <form className={styles.loginForm} onSubmit={handleSubmit(submitForm)} >

                <div className={classNames(styles.loginHeader, styles.loginSection)}>
                    <TextComponent textRef='login_header' />
                </div>

                {error && <h1>ERROR TBD</h1>}

                <div className={styles.loginSection} >

                    <input 
                        type='email'
                        {...register('email')}
                        required
                        autoComplete='off'
                        role='email-input'
                        placeholder={intl.formatMessage({id: 'common_email_tag'})}
                    />
                    
                </div>

                <div className={styles.loginSection} >

                    <input 
                        type='password'
                        {...register('password')}
                        required
                        autoComplete='off'
                        role='password-input'
                        placeholder={intl.formatMessage({id: 'common_password_tag'})}
                    />

                </div>

                <div className={classNames(styles.loginSection, styles.loginButtonSection)}>

                    <ButtonPrimaryComponent 
                        textRef='nav_register_link'
                        onClick={() => navigate('/auth/register')}
                        style={styles.loginFormRegister}
                    />

                    <ButtonPrimaryComponent
                        disabled={loading}
                        textRef='nav_login_link'
                        onClick={formRef.current?.submit}
                    />

                </div>

                <div className={classNames(styles.loginSection)}>
                    <NavLink to='/new' >
                        <TextComponent textRef='nav_continue-without-account' />
                    </NavLink>
                </div>

            </form>
        </div>
    )
}

export default LoginFormComponent
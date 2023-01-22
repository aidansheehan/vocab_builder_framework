import { useRef }                   from 'react'
import { useForm }                  from 'react-hook-form'
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

    return (

        <form className={styles.login} onSubmit={handleSubmit(submitForm)} >

            <TextComponent textRef='login_header' />

            {error && <h1>ERROR TBD</h1>}

            <div>
                <label htmlFor='email'>
                    <TextComponent textRef='common_email_tag' />
                </label>
                <input 
                    type='email'
                    {...register('email')}
                    required
                    autoComplete='off'
                    role='email-input'
                />
            </div>

            <div>
                        <label htmlFor='password'>
                            <TextComponent textRef="common_password_tag" />
                        </label>
                        <input 
                            type='password'
                            {...register('password')}
                            required
                            autoComplete='off'
                            role='password-input'

                        />

                    </div>

                    <ButtonPrimaryComponent
                        disabled={loading}
                        textRef='nav_login_link'
                        onClick={formRef.current?.submit}
                    />

                    <hr />

                    <TextComponent textRef='login_signup_link' />
                    <ButtonPrimaryComponent textRef='nav_register_link' onClick={() => navigate('/register')} />
            
        </form>
    )
}

export default LoginFormComponent
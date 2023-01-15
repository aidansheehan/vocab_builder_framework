//Core
import { useRef } from 'react'
//React Hook Form (Client Side Validation)
import { useForm } from 'react-hook-form'
//Router
import { useNavigate } from 'react-router-dom'
//Components
import TextComponent            from '../../components/text/text.component'
import ButtonPrimaryComponent   from '../../components/button/components/button-primary.component'
//Hooks
import useAppDispatch from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector from '../../hooks/redux/use-app-selector.hook'
//Types
import { UserLoginRequestType } from '../../redux/features/user/types/request.types'
//Actions
import { userLogin } from '../../redux/features/user/user.actions'

/**
 * Login Page Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <LoginPage />
 * )
 */
const LoginPage = (): JSX.Element => {

    const { loading, error }            = useAppSelector((state) => state.user)     //Pull out user state values to handle UI state
    const { register, handleSubmit }    = useForm()                                 //Get register and handleSubmit useForm methods

    const dispatch      = useAppDispatch()      //Init useDispatch
    const navigate      = useNavigate()         //Init useNavigate

    //Function to submit login form
    const submitForm = (data: UserLoginRequestType) => {

        dispatch(userLogin(data))
    }

    //Reference for login form
    const formRef = useRef<HTMLFormElement>(null)

    return (

        <form onSubmit={handleSubmit(submitForm)} data-testid='login-page' ref={formRef} >

            <TextComponent textRef='login_header' />

            {error && <h1>Error TBD</h1>}

            <div>
                <label htmlFor='email'>
                    <TextComponent textRef="common_email_tag" />
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

export default LoginPage
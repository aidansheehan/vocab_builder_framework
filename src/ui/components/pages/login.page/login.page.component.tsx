//React Hook Form (Client Side Validation)
import { useForm } from 'react-hook-form'
//Router
import { useNavigate } from 'react-router-dom'
//Components
import TextComponent    from '../../text/text.component'
import ButtonComponent  from '../../button/button.component'
//Hooks
import useAppDispatch from '../../../../hooks/redux/use-app-dispatch.hook'
import useAppSelector from '../../../../hooks/redux/use-app-selector.hook'
//Types
import { UserLoginRequestType } from '../../../../redux/features/user/types/request.types'
//Actions
import { userLogin } from '../../../../redux/features/user/user.actions'


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

    const { loading, error }            = useAppSelector((state) => state.user)     //Pull out user state values to handle UI state
    const { register, handleSubmit }    = useForm()                                 //Get register and handleSubmit useForm methods

    const dispatch      = useAppDispatch()      //Init useDispatch
    const navigate      = useNavigate()         //Init useNavigate

    //Function to submit login form
    const submitForm = (data: UserLoginRequestType) => {

        dispatch(userLogin(data))
    }

    return (

        <form onSubmit={handleSubmit(submitForm)} data-testid='login-page'>

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

            <button type='submit' role='login-submit' disabled={loading} ><TextComponent textRef='nav_login_link' /></button>

            <hr />

            <TextComponent textRef='login_signup_link' />
            <ButtonComponent textRef='nav_register_link' onClick={() => navigate('/register')} />

        </form>
    )
}

export default LoginPageComponent
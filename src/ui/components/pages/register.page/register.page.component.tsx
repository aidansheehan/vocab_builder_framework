//Core
import { useEffect } from 'react'
//React Hook Form (Client Side Validation)
import { useForm } from 'react-hook-form'
//Actions
import { registerUser } from '../../../../redux/features/user/user.actions'
//Router
import { useNavigate }  from 'react-router-dom'
//Hooks
import useAppSelector   from '../../../../hooks/redux/use-app-selector.hook'
import useAppDispatch   from '../../../../hooks/redux/use-app-dispatch.hook'
//Types
import { RegisterUserRequestType } from '../../../../redux/features/user/types/request.types'
//Components
import TextComponent from '../../text/text.component'

/**
 * Page to register a new user
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <RegisterPageComponent />
 * )
 */
const RegisterPageComponent = (): JSX.Element => {

    //Pull out user state values to handle UI state
    const { loading, error, success, userInfo } = useAppSelector(state => state.user)

    const dispatch                      = useAppDispatch()  //Init useAppDispatch
    const { register, handleSubmit }    = useForm()         //Destrucutre use form
    const navigate                      = useNavigate()     //init useNavigate

    //Function to submit login form
    const submitForm = (data: RegisterUserRequestType) => {

        //Check if passwords match
        if (data.password !== data.passwordConfirm) {
            alert('Password Mismatch TBD')
            return
        }

        //transform email string to lowercase to avoid case sensititivty issues
        data.email = data.email.toLowerCase()

        //dispatch action to register user
        dispatch(registerUser(data))
    }

    //Handle redirects TODO should log user in & redirect to home?
    useEffect(() => {

        //Redirect user to login if registration was successful
        if (success) navigate(`/login`)

         //Redirect authenticated user to their home screen TODO may need to revisit how check authenticated
        if (userInfo) navigate(`/collections`)

    }, [ navigate, userInfo, success ])

    return (
        <div data-testid='register-page' >

            <TextComponent textRef='register_header' />

            <form onSubmit={handleSubmit(submitForm)}>

                {/* Render error message if any TBD */}
                {error && <h1>Error!</h1>}

                <div>
                    <label htmlFor="username">
                        <TextComponent textRef="common_username_tag" />
                    </label>
                    <input 
                        type='text'
                        {...register('username')}
                        required
                        autoComplete='off'
                        role='username-input'
                    />
                </div>

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

                <div>
                    <label htmlFor='passwordConfirm'>
                        <TextComponent textRef="register_confirm_password_tag" />
                    </label>
                    <input 
                        type='password'
                        {...register('passwordConfirm')}
                        required
                        autoComplete='off'
                        role='confirm-password-input'
                    />
                </div>

                <button type='submit' disabled={loading}>
                    Register
                </button>

            </form>

        </div>
    )
}

export default RegisterPageComponent
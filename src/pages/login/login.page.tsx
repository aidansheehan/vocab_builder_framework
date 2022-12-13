//Core
import { useEffect } from 'react'
//React Hook Form (Client Side Validation)
import { useForm } from 'react-hook-form'
//Router
import { useNavigate } from 'react-router-dom'
//Components
import TextComponent from '../../components/text/text.component'
//Hooks
import useAppDispatch from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector from '../../hooks/redux/use-app-selector.hook'
import { useIntl } from 'react-intl'
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

    const { loading, error, userInfo }  = useAppSelector((state) => state.user)     //Pull out user state values to handle UI state
    const { register, handleSubmit }    = useForm()                                 //Get register and handleSubmit useForm methods

    const dispatch      = useAppDispatch()      //Init useDispatch
    const navigate      = useNavigate()         //Init useNavigate
    const intl          = useIntl()             //Get current locale object
    const { locale }    = intl                  //Destructure locale object
    

    //Function to submit login form
    const submitForm = (data: UserLoginRequestType) => {

        dispatch(userLogin(data))
    }

    //Redirect authenticated users to their home screen TODO test if userInfo object changes triggered as may be property change rather than var reassignment
    useEffect(() => {

        if (userInfo) {
            navigate(`/${locale}/collections`)
        }
    }, [ navigate, userInfo ])

    return (

        <form onSubmit={handleSubmit(submitForm)}>

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
                />

            </div>

            <button type='submit' disabled={loading} >Login</button>

        </form>
    )
}

export default LoginPage
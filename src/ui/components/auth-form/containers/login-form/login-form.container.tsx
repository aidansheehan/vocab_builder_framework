import { useNavigate }              from 'react-router-dom'
import { UserLoginRequestType }     from '../../../../../redux/features/user/types/request.types'
import { userLogin }                from '../../../../../redux/features/user/user.actions'
import useAppDispatch               from '../../../../hooks/redux/use-app-dispatch.hook'
import useAppSelector               from '../../../../hooks/redux/use-app-selector.hook'
import AuthFormComponent            from '../../auth-form.component'
import { AuthFormButtonConfig }     from '../../types/auth-form.button-config.type'
import { LOGIN_REQUEST_DATA }       from './constants/login-request-data.constant'

/**
 * Login form container
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *  <LoginFormContainer />
 * )
 */
const LoginFormContainer = (): JSX.Element => {

    const { loading, error } = useAppSelector(state => state.user)  //User state values to handle UI state

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submitLogin = (data: UserLoginRequestType) => {

        dispatch(userLogin(data))
    }

    const handleRegisterClick = () => {
        navigate('/auth/register')
    }

    const LOGIN_BUTTON_CONFIG: AuthFormButtonConfig[] = [
        {
            handleClick: handleRegisterClick,
            textReference: 'nav_register_link'
        }
    ]

    return (
        <AuthFormComponent 
            onSubmit={submitLogin}
            submitBtnTextReference='nav_login_link'
            titleReference='login_header'
            requestData={LOGIN_REQUEST_DATA}
            buttons={LOGIN_BUTTON_CONFIG}
            loading={loading}
            error={error}
            continueWithoutAccount={true}
        />
    )
}

export default LoginFormContainer
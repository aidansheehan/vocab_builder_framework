import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUserRequestType } from "../../../../../redux/features/user/types/request.types"
import { registerUser } from "../../../../../redux/features/user/user.actions"
import useAppDispatch from "../../../../hooks/redux/use-app-dispatch.hook"
import useAppSelector from "../../../../hooks/redux/use-app-selector.hook"
import AuthFormComponent from "../../auth-form.component"
import { AuthFormButtonConfig } from "../../types/auth-form.button-config.type"
import { REGISTER_REQUEST_DATA } from "./constants/register-request-data.constant"


/**
 * Register form container
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <RegisterFormContainer />
 * )
 */
const RegisterFormContainer = (): JSX.Element => {

    //User state values to handle UI state
    const { loading, error, success, userInfo } = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submitRegister = (data: RegisterUserRequestType) => {

        //Check if passwords match
        if (data.password !== data.passwordConfirm) {
            alert('Password Mismatch TBD')
            return
        }

        //transform email string to lowercase to avoid case sensitivity issues
        data.email = data.email.toLowerCase()

        //dispatch action to register user
        dispatch(registerUser(data))

    } 

    const handleLoginClick = () => {
        navigate('/auth/login')
    }

    const REGISTER_BUTTON_CONFIG: AuthFormButtonConfig[] = [
        {
            handleClick: handleLoginClick,
            textReference: 'nav_login_link'
        }
    ]

    //Handle redirects TODO should log user in & redirect to home?
    useEffect(() => {

        //Redirect user to login if registration was successful
        if (success) navigate('/auth/login')
    }, [ navigate, success, userInfo ])

    return (
        <AuthFormComponent 
            onSubmit={submitRegister}
            submitBtnTextReference='nav_register_link'
            titleReference='register_header'
            requestData={REGISTER_REQUEST_DATA}
            buttons={REGISTER_BUTTON_CONFIG}
            loading={loading}
            error={error}
            continueWithoutAccount={true}
        />
    )

}

export default RegisterFormContainer
import { useForm }      from 'react-hook-form'
import { registerUser } from "../../redux/features/user/user.actions"
import { useNavigate }  from 'react-router-dom'
import { useEffect }    from 'react'
import useAppSelector   from '../../hooks/redux/use-app-selector.hook'
import useAppDispatch   from '../../hooks/redux/use-app-dispatch.hook'

/**
 * Page to register a new user
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <RegisterPage />
 * )
 */
const RegisterPage = (): JSX.Element => {

    //Pull out user state values to handle UI state
    const { loading, error, success, userInfo } = useAppSelector(state => state.user)

    const dispatch                      = useAppDispatch()  //Init useAppDispatch
    const { register, handleSubmit }    = useForm()         //Destrucutre use form
    const navigate                      = useNavigate()     //init useNavigate

    //Function to submit login form
    const submitForm = (data: any) => {

        //Check if passwords match
        if (data.password !== data.confirmPassword) {
            alert('Password Mismatch TBD')
            return
        }

        //transform email string to lowercase to avoid case sensititivty issues
        data.email = data.email.toLowerCase()

        //dispatch action to register user
        //@ts-ignore TODO
        dispatch(registerUser(data))
    }

    //Handle redirects TODO should log user in & redirect to home?
    useEffect(() => {

        //Redirect user to login if registration was successful
        if (success) navigate('/login')

         //Redirect authenticated user to their home screen TODO may need to revisit how check authenticated
        if (userInfo) navigate('/collections')

    }, [ navigate, userInfo, success ])

    return (
        <div>

            <form onSubmit={handleSubmit(submitForm)}>

                {/* Render error message if any TBD */}
                {error && <h1>Error!</h1>}

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type='text'
                        {...register('username')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email'
                        {...register('email')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password'
                        {...register('password')}
                        required
                    />
                </div>

                <div>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input 
                        type='password'
                        {...register('confirmPassword')}
                        required
                    />
                </div>

                <button type='submit' disabled={loading}>
                    Register
                </button>

            </form>

            I am the register page.
        </div>
    )
}

export default RegisterPage
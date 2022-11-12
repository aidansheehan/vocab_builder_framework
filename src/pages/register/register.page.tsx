import { useForm } from 'react-hook-form'
import { registerUser } from "../../redux/features/user/user.actions"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
    const { loading, error, success, userInfo } = useSelector(

        //@ts-ignore
        (state) => state.user
    )

    const dispatch                      = useDispatch()
    const { register, handleSubmit }    = useForm()
    const navigate                      = useNavigate()

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
        //@ts-ignore
        dispatch(registerUser(data))
    }

    //Handle redirects TODO should log user in & redirect to home?
    useEffect(() => {

        console.log('user info: ', userInfo)

        //Redirect user to login if registration was successful
        if (success) navigate('/login')

         //Redirect authenticated user to their home screen TODO may need to revisit how check authenticated
        if (userInfo && Object.keys(userInfo).length) navigate('/home')

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
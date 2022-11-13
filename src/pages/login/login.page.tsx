import { useEffect }                from 'react'
import { useForm }                  from 'react-hook-form'
import { useNavigate }              from 'react-router-dom'
import useAppDispatch               from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector               from '../../hooks/redux/use-app-selector.hook'
import { userLogin }                from '../../redux/features/user/user.actions'


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

    //Pull out user state values to handle UI state
    const { loading, error, userInfo }  = useAppSelector((state) => state.user)    //Pull out user state values to handle UI state
    const { register, handleSubmit }    = useForm()                             //Get register and handleSubmit useForm methods

    const dispatch = useAppDispatch()   //Init useDispatch
    const navigate = useNavigate()      //Init useNavigate
    

    //Function to submit login form TODO type
    const submitForm = (data: any) => {

        //@ts-ignore
        dispatch(userLogin(data))
    }

    //Redirect authenticated users to their home screen TODO test if userInfo object changes triggered as may be property change rather than var reassignment
    useEffect(() => {

        if (userInfo) {
            navigate('/collections')
        }
    }, [ navigate, userInfo ])

    return (

        <form onSubmit={handleSubmit(submitForm)}>

            {error && <h1>Error TBD</h1>}

            <div>
                <label htmlFor='username'>Username</label>
                <input 
                    type='username'
                    {...register('username')}
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

            <button type='submit' disabled={loading} >Login</button>

        </form>
    )
}

export default LoginPage
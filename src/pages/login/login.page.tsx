//@ts-ignore
import Form from 'react-validation/build/form'
//@ts-ignore
import Input from 'react-validation/build/input'
//@ts-ignore
import CheckButton from 'react-validation/build/button'
//@ts-ignore TODO not sure if needed?
// import validateAll from 'validator/lib/validateAll'

// import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { login } from '../../actions/auth'


//Validate required fields (display alert if empty)
const required = (value: string) => {
    if (!value) {
        return (
            <div className="alert" role="alert">
                This field is required!
            </div>
        )
    }
}

/**
 * Login (!auth) page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <LoginPage />
 * )
 */
const LoginPage = () => {

    let navigate = useNavigate()    //Init navigate

    const form      = useRef<HTMLFormElement>(null)     //init form ref
    const checkBtn  = useRef<any>(null)   //init check btn TODO need typing from validator

    const [ username, setUsername ] = useState<string>('')      //Init username
    const [ password, setPassword ] = useState<string>('')      //Init password
    const [ loading, setLoading ]   = useState<boolean>(false)  //Init loading

    //If user is logged in TODO type
    //@ts-ignore
    const [ isLoggedIn ] = useSelector(state => state.auth)

    //Message TODO i'm not sure what this does and TODO type
    //@ts-ignore
    const { message } = useSelector(state => state.message)

    const dispatch = useDispatch();

    //Function to update username state on keypress TODO careful with these types as not sure typings of react-validation library components!
    const onChangeUsername = (e_: React.KeyboardEvent<HTMLInputElement>) => {

        const { target }    = e_                           //Destructure keyboard event
        const { value }     = target as HTMLInputElement   //Destructure target

        setUsername(value)  //Set username
    }

    //Function to update password state on keypress
    const onChangePassword = (e_: React.KeyboardEvent<HTMLInputElement>) => {

        const { target }    = e_                           //Destructure keyboard event
        const { value }     = target as HTMLInputElement   //Destructure target

        setPassword(value)   //Set password
    }

    //Function to handle login (TODO type)
    const handleLogin = (e_: any /*FormEvent<HTMLFormElement>*/ ) => {

        e_.preventDefault() //prevent default form submission behaviour

        setLoading(true)    //Loading state true

        //Validate input TODO type?
        //@ts-ignore
        form.current && form.current.validateAll()

        if (checkBtn.current && checkBtn.current.context._errors.length === 0) {

            //Log user in
            //@ts-ignore TODO
            dispatch(login(username, password))
                .then(() => {
                    navigate('/profile');
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false)
                })
        } else {

            setLoading(false)
        }

    }

    if (isLoggedIn) {
        return <Navigate to='/profile' />
    }

    return (
        <div className="login">
            <Form onSubmit={handleLogin} ref={form}>

                <div className={'form-section'}>
                    <label htmlFor="username">Username</label>
                    <Input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                    />
                </div>

                <div className={'form-section'}>
                    <label htmlFor="password">Password</label>
                    <Input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                    />
                </div>

                <div className={'form-section'} >

                    <button disabled={loading}>

                        {/* This can be a spinner or whatever */}
                        {loading && (<span>loading...</span>)}
                        <span>Login</span>

                    </button>

                </div>

                {message && (
                    <div className={'form-section'} >
                        <div className={'alert'} role={'alert'}>
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                
            </Form>
        </div>
    )

}

export default LoginPage
import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import App from "../../app"
import useAppDispatch from "../../hooks/redux/use-app-dispatch.hook"
import { getUserDetails } from "../../redux/features/user/user.actions"

/**
 * Preloader Component
 */
const PreloaderComponent = () => {

    const [ loading, setLoading ] = useState(true)
    const dispatch = useAppDispatch()

    //Automatically authenticate user if token is found
    useEffect(() => {

        const accessToken = localStorage.getItem('userToken')

        if (accessToken) {
    
            //Dispatch action to log the user in
            dispatch(getUserDetails())
                .then(() => {
                    setLoading(false)
                })
                .catch(error => {
                    setLoading(false)
                    console.error(error)
                })
        }
    
        //If there is no accessToken, set the loading state to false
        else {
            setLoading(false)
        }
    }, [])

    //TODO implement loader component
    return (
        <div>
            {
                loading
                ?
                <div>Loading...</div>
                :
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            }
        </div>
    )
}

export default PreloaderComponent
import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import App from "../../app"
import useAppDispatch from "../../hooks/redux/use-app-dispatch.hook"
import { getUserDetails/*, userRefresh */} from "../../redux/features/user/user.actions"

/**
 * Preloader Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <PreloaderComponent />
 * )
 */
const PreloaderComponent = () => {

    const [ loading, setLoading ] = useState(true)
    const dispatch = useAppDispatch()

    //Attempt to authenticate user
    useEffect(() => {

        if (loading) {
            dispatch(getUserDetails()).then(() => setLoading(false))
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
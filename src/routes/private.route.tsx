import { useEffect } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import FooterComponent from "../components/footer/footer.component"
import HeaderComponent from "../components/header/header.component"
import useAppSelector from "../hooks/redux/use-app-selector.hook"

/**
 * Private route
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <PrivateRoute  />)
 */
const PrivateRoute = () => {

    const { user }              = useAppSelector(state => state)    //Get user object
    const { loading, userInfo } = user                              //Destructure user object

    const navigate = useNavigate()  //Init useNavigate

    //Automatically redirect user to login page if they are not logged in
    useEffect(() => {

        if (!userInfo && !loading) {
            navigate('/login')
        }
    }, [ userInfo, navigate, loading ] )


    //TODO should def just be Outlet and header/footer abstracted out
    return !!userInfo && !loading ? (
        <div>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    ) : <div>Loading...</div>

}

export default PrivateRoute
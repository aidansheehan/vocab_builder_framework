//Core
import { useEffect } from 'react'
//Router
import { useLocation, useNavigate } from 'react-router-dom'
//Redux
import useAppSelector from './hooks/redux/use-app-selector.hook'
//Layouts
import SidebarLayout    from './layouts/sidebar/sidebar.layout'
import HeaderLayout     from './layouts/header/header.layout'
//Stylesheets
import './global.scss'

/**
 * Main app component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *  <App />
 * )
*/
const App = () => {

    const { userInfo } = useAppSelector(state => state.user)    //Get userInfo

    const location = useLocation()  //Init useLocation
    const navigate = useNavigate()  //Init useNavigate

    /** Route Guard Redirect Logic */
    useEffect(() => {

        //If user is logged in
        if (!!userInfo) {

            //If user is trying to access public route
            if (!location.pathname.includes('user')) {

                //Redirect to user home page
                navigate('/user')
            }
        }

        //If user is not logged in
        if (!userInfo) {

            //If user is trying to access private route
            if (location.pathname.includes('user')) {

                //Redirect to login page
                navigate('/auth/login')
            }
        }

    }, [ userInfo, navigate ] )

    return (
        <>
            {
                !!userInfo
                ?
                <SidebarLayout />
                :
                <HeaderLayout />
            }
        </>
    )

}

export default App
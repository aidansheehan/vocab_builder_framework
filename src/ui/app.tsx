//Core
import { useEffect } from 'react'
//Router
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
//Redux
import useAppSelector from './hooks/redux/use-app-selector.hook'
//Components
import HeaderComponent from './components/header/header.component'
import FooterComponent from './components/footer/footer.component'
//Stylesheets TODO would be better if global module
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
                navigate('/login')
            }
        }

    }, [ userInfo, navigate ] )

    return (
        <div>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )

}

export default App
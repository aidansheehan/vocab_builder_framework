import { NavLink, Outlet }  from 'react-router-dom'
import FooterComponent      from '../../components/footer/footer.component'
import HeaderComponent      from '../../components/header/header.component'
import useAppSelector       from '../../hooks/redux/use-app-selector.hook'

/**
 * Generic protected route
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <ProtectedRoute />
 * )
 */
const ProtectedRoute = () => {

    const { userInfo } = useAppSelector(state => state.user) //Destructure user state

    //show unauthorized screen if no user is found in redux store TODO just redirect user to landing page
    if (!userInfo) {
        return (
            <div>
                <h1>Unauthorized :(</h1>

                <span>
                    <NavLink to='/login'>Login</NavLink> to gain access
                </span>

            </div>
        )
    }

    //return child route elements
    return (
        <div id='protected-route'>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>

        )

}

export default ProtectedRoute
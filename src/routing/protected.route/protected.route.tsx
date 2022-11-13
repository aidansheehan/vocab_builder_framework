import { useSelector }      from 'react-redux'
import { NavLink, Outlet }  from 'react-router-dom'
import FooterComponent from '../../components/footer/footer.component'
import HeaderComponent from '../../components/header/header.component'

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

    //@ts-ignore TODO
    const { userInfo } = useSelector((state) => state.user) //Destructure user state

    //show unauthorized screen if no user is found in redux store TODO just redirect user to landing page
    if (!userInfo || !Object.keys(userInfo).length) {
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
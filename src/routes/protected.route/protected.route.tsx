import { useEffect }            from 'react'
import { Outlet, useNavigate }  from 'react-router-dom'
import FooterComponent          from '../../components/footer/footer.component'
import HeaderComponent          from '../../components/header/header.component'
import useAppSelector           from '../../hooks/redux/use-app-selector.hook'

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

    const navigate      = useNavigate()     //Init useNavigate

    //redirect to landing page if no user is found in redux store
    useEffect(() => {
        if (!userInfo) navigate(`/`)
    }, [ userInfo ] )

    //return child route elements
    return (
        <div id='protected-route' data-testid='protected-route'>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>

        )

}

export default ProtectedRoute
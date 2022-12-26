import { useEffect }            from 'react'
import { Outlet, useNavigate}   from 'react-router-dom'
import FooterComponent          from '../components/footer/footer.component'
import HeaderComponent          from '../components/header/header.component'
import useAppSelector           from '../hooks/redux/use-app-selector.hook'

/**
 * Public Route
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <PublicRoute />
 * )
 */
const PublicRoute = () => {    

    const { userInfo } = useAppSelector(state => state.user)    //Get userInfo
    const navigate = useNavigate()                              //Init useNavigate

    //Automatically redirect user to private route if they are logged in
    useEffect(() => {

        if (userInfo) {
            navigate('/collections')
        }
    }, [ navigate, userInfo ])

    //TODO can move header and footer out of this logic so they aren't re-rendered
    return (
        <div>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )

}

export default PublicRoute
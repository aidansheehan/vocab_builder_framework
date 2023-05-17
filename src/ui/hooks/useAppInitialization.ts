import { useEffect }                    from 'react'
import { useLocation, useNavigate }     from 'react-router-dom'
import { getCollections }               from '../../redux/actions/collections.actions'
import { getUserDetails }               from '../../redux/actions/user.actions'
import { logout, userLoaded }           from '../../redux/slices/user.slice'
import useAppDispatch                   from './redux/use-app-dispatch.hook'
import useAppSelector                   from './redux/use-app-selector.hook'

const useAppInitialization = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const { userInfo, loading, loggingOut }     = useAppSelector(state => state.user)   //Destructure user state
    const accessToken                           = localStorage.getItem('userToken')     //Get accessToken

    useEffect(() => {

        const fetchUserDetailsAndNavigate = async () => {
            
            if (accessToken) {
                await dispatch(getUserDetails())
                await dispatch(getCollections())
                if (!location.pathname.includes('user')) {
                    navigate('/user')
                }
            } else {
                if (location.pathname.includes('user')) {
                    navigate('/auth/login')
                }
            }
        }

        const logoutAndNavigate = async () => {

            await dispatch(logout())
            navigate('/auth/login')
            dispatch(userLoaded())

        }

        //Run only if not loading and userInfo or accessToken changes
        if (!loading && !loggingOut && !userInfo) {
            fetchUserDetailsAndNavigate()
        }

        //Handle logout
        if (loggingOut) {
            logoutAndNavigate()
        }

    }, [ accessToken, dispatch, navigate, userInfo, loggingOut ])

}

export default useAppInitialization
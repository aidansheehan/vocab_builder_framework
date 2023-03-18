import { useEffect, useState }  from 'react'
import App                      from '../../app'
import useAppDispatch           from '../../hooks/redux/use-app-dispatch.hook'
import { getUserDetails }       from '../../../redux/actions/user.actions'
import styles                   from './preloader.component.scss'
import { getCollections }       from '../../../redux/actions/collections.actions'
import useAppSelector           from '../../hooks/redux/use-app-selector.hook'

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

    const [ userLoaded, setUserLoaded ]                 = useState(false)
    const [ collectionsLoaded, setCollectionsLoaded ]   = useState(false)

    const dispatch = useAppDispatch()

    // TODO retrieve accessToken from user state VBB-14
    const { userInfo/*, accessToken*/ } = useAppSelector(state => state.user)

    //Get accessToken TODO refactor in VBB-14 to get from redux
    const accessToken = localStorage.getItem('userToken')

    // Function to retrieve user details and log them in
    const loadUser = async () => {

        //Fetch user details from backend
        await dispatch(getUserDetails())

        //Set userLoaded flag true TODO should check for success before setting flag and handle errors
        setUserLoaded(true)
    }

    // Function to retrieve user's collections
    const loadCollections = async () => {

        //Fetch collection details from backend
        await (dispatch(getCollections()))

        //set collectionsLoaded flag true TODO should check for success before setting flag and handle errors
        setCollectionsLoaded(true)
    }

    //Attempt to authenticate user
    useEffect(() => {

        //Attempt to fetch user details
        if (accessToken) loadUser()
        // loadUser()
        if (!accessToken) setUserLoaded(true)

    }, [accessToken])

    //Monitor for user changes and retrieve collections
    useEffect(() => {

        if (userInfo) {
            loadCollections()
        }

    }, [userInfo])

    return (
        <div className={styles.preloader}>
            {
                (!userInfo && userLoaded) || (userInfo && collectionsLoaded)
                ?
                <App />
                :
                // TODO: replace with loader (spinner) component VBF-58
                <div>Loading...</div>
            }
        </div>
    )
}

export default PreloaderComponent
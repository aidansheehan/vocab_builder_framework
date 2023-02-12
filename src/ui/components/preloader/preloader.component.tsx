import { useEffect, useState }  from 'react'
import App                      from '../../app'
import useAppDispatch           from '../../hooks/redux/use-app-dispatch.hook'
import { getUserDetails }       from '../../../redux/user/actions/user.actions'
import styles                   from './preloader.component.scss'
import { getCollections }       from '../../../redux/collections/actions/collections.actions'
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

    const { userInfo } = useAppSelector(state => state.user)

    const loadUser = async () => {

        //Fetch user details from backend
        await dispatch(getUserDetails())

        //Set userLoaded flag true TODO should check for success before setting flag and handle errors
        setUserLoaded(true)
    }

    const loadCollections = async () => {

        //Fetch collection details from backend
        await (dispatch(getCollections()))

        //set collectionsLoaded flag true TODO should check for success before setting flag and handle errors
        setCollectionsLoaded(true)
    }

    //Attempt to authenticate user
    useEffect(() => {

        //Attempt to fetch user details
        loadUser()

    }, [])

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
import { useEffect, useState }  from 'react'
import App                      from '../../app'
import useAppDispatch           from '../../hooks/redux/use-app-dispatch.hook'
import { getUserDetails }       from '../../../redux/user/actions/user.actions'
import styles                   from './preloader.component.scss'
import { getCollections }       from '../../../redux/collections/actions/collections.actions'

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

    const [ loading, setLoading ] = useState(true)
    const dispatch = useAppDispatch()

    //Function to fetch required user data
    const preloadData = async () => {

        //Fetch user details from backend
        await dispatch(getUserDetails())

        //Fetch user collections from backend
        await dispatch(getCollections())

        //Set loading flag false and proceed to application
        setLoading(false)
    }

    //Attempt to authenticate user
    useEffect(() => {

        //If not already loaded
        if (loading) {

            //Execute function to fetch required data to populate store and proceed to application
            preloadData()

        }
        
    }, [])

    //TODO implement loader component
    return (
        <div className={styles.preloader}>
            {
                loading
                ?
                // TODO: replace with loader (spinner) component VBF-58
                <div>Loading...</div>
                :
                <App />
            }
        </div>
    )
}

export default PreloaderComponent
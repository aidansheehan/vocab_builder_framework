import { useEffect, useState }  from 'react'
import App                      from '../../app'
import useAppDispatch           from '../../hooks/redux/use-app-dispatch.hook'
import { getUserDetails }       from '../../../redux/user/actions/user.actions'
import styles                   from './preloader.component.scss'

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

    //Attempt to authenticate user
    useEffect(() => {

        if (loading) {
            dispatch(getUserDetails()).then(() => setLoading(false))
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
import { useEffect }                from 'react'
import { clearError }               from '../../../redux/slices/error.slice'
import useAppDispatch               from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector               from '../../hooks/redux/use-app-selector.hook'
import ButtonComponent              from '../button/button.component'
import TextComponent                from '../text/text.component'
import ERROR_DISPLAY_DURATION       from './constants/error-display-duration.constant'
import styles                       from './error-notification.component.scss'

/**
 * Error notification component for use across the framework
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <ErrorNotificationComponent />
 * )
 */
const ErrorNotificationComponent = (): JSX.Element => {

    const dispatch = useAppDispatch()

    //Destructure app error interface
    const { errorMessage, errorFlag } = useAppSelector(state => state.error)

    //Monitor for errorFlag
    useEffect(() => {

        //If errorFlag
        if (errorFlag) {

            //Set timeout to remove error
            const timer = setTimeout(() => {
                dispatch(clearError())
            }, ERROR_DISPLAY_DURATION)

            //Clean up timer on exit DOM
            return () => clearTimeout(timer)
        }
    }, [ errorFlag ])

    if (!errorFlag) return null

    return (
        <div className={styles.errorNotification} style={{ '--duration': `${ERROR_DISPLAY_DURATION}ms` } as React.CSSProperties} >
            <ButtonComponent icon='times' onClick={() => dispatch(clearError())} style={styles.errorNotificationCloseBtn} />
            <TextComponent textRef={errorMessage} />
        </div>
    )
    
}

export default ErrorNotificationComponent
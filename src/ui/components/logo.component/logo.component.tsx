import classNames   from 'classnames'
import { APP_NAME } from '../../constants/app-name.constant'
import styles       from './logo.component.scss'

/** LogoComponentProps */
type LogoComponentProps = {

    /** Additional Styles to be Applied */
    style?: string

}

/**
 * Component to display the logo
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <LogoComponent />
 * )
 */
const LogoComponent = (props: LogoComponentProps): JSX.Element => {

    const { style } = props //Destructure props

    //Create component class name
    const className = classNames(styles.logo, style)

    return (
        <div className={className} >
            {APP_NAME}
        </div>
    )

}

export default LogoComponent
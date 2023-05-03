import classNames                   from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_NAME }                 from '../../constants/app-name.constant'
import styles                       from './logo.component.scss'

/** LogoComponentProps */
type LogoComponentProps = {

    /** Link to navigate to */
    linkTo?: string,

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

    const { style, linkTo } = props //Destructure props
    
    const navigate = useNavigate()
    const location = useLocation()

    //Whether logo is link
    const isLink = linkTo && location.pathname !== linkTo

    //Create component class name
    const className = classNames(styles.logo, { [styles.isLink]: isLink }, style)

    return (
        <div className={className} onClick={() => isLink && navigate(linkTo)} >
            {APP_NAME}
        </div>
    )

}

export default LogoComponent
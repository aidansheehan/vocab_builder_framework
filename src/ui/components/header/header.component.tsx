//Components
import LocaleSelectorComponent      from '../locale-selector/locale-selector.component'
import LogoComponent                from '../logo.component/logo.component'
//Hooks
import useDevice from '../../hooks/useDevice.hook'
//Styles
import styles from './header.component.scss'
import classNames from 'classnames'

type HeaderComponentProps = {

    /** Logo link */
    linkTo?: string,

    /** Additional styles to be applied */
    style?: string
}

/**
 * Header component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderComponent />
 * )
 */
const HeaderComponent = (props: HeaderComponentProps): JSX.Element => {

    const { style, linkTo } = props         //Destructure props

    const device    = useDevice()

    //Component className
    const className = classNames(styles.header, style)

    return (
        <div className={className} >

            <LogoComponent style={styles.headerLogo} linkTo={linkTo} />

            {
                device !== 'mobile'
                ?
                <LocaleSelectorComponent style={styles.headerLocaleSelector} dropdown />
                :
                <></>
            }

        </div>
    )

}

export default HeaderComponent;
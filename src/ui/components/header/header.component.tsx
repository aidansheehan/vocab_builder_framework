//Components
import LocaleSelectorComponent      from '../locale-selector/locale-selector.component'
import LogoComponent                from '../logo.component/logo.component'
//Hooks
import useDevice from '../../hooks/useDevice.hook'
//Styles
import styles from './header.component.scss'

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
const HeaderComponent = (): JSX.Element => {

    const device = useDevice()

    return (
        <div className={styles.header} >

            <LogoComponent style={styles.headerLogo} />

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
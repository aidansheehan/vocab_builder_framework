import { logoutInititialized }      from '../../../redux/slices/user.slice'
import ButtonComponent              from '../../components/button/button.component'
import LocaleSelectorComponent      from '../../components/locale-selector/locale-selector.component'
import UserBannerComponent          from '../../components/user-banner/user-banner.component'
import useAppDispatch               from '../../hooks/redux/use-app-dispatch.hook'
import styles                       from './settings.page.scss'

/**
 * Settings page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <SettingsPage />
 * )
 */
const SettingsPage = (): JSX.Element => {

    const dispatch = useAppDispatch()

    return (
        <div className={styles.settingsPage} >
            
            <UserBannerComponent />

            <div className={styles.baseSettings} >
                <LocaleSelectorComponent />
            </div>

            <div className={styles.settingsControl}>
                <ButtonComponent secondary onClick={() => dispatch(logoutInititialized())} icon='right-from-bracket' textRef='nav_logout_link' style={styles.settingsButton} />
            </div>

        </div>
    )

}

export default SettingsPage
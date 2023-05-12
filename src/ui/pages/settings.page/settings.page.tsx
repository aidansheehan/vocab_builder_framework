import styles from './settings.page.scss'

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

    return (
        <div className={styles.settingsPage} >
            I am the settings page.
        </div>
    )

}

export default SettingsPage
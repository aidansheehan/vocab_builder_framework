import useAppSelector       from '../../hooks/redux/use-app-selector.hook'
import IconComponent        from '../icon/icon.component'
import TextValueComponent   from '../text-value/text-value.component'
import styles               from './user-banner.component.scss'

/**
 * Banner component to display username
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <UserBannerComponent />
 * )
 */
const UserBannerComponent = (): JSX.Element => {

    const { userInfo } = useAppSelector(state => state.user)

    // TODO investigate why rendered before app component
    if (!userInfo) return null

    const { username } = userInfo

    return (
        <div className={styles.userBannerContainer} >

            <div className={styles.userBanner} >

                <IconComponent icon={{icon: 'user'}} style={styles.userIcon} />

                <TextValueComponent style={styles.username} value={username} title />

            </div>

        </div>
    )
}

export default UserBannerComponent
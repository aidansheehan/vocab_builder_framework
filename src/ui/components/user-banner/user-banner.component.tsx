import useAppSelector       from '../../hooks/redux/use-app-selector.hook'
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

    const { username } = useAppSelector(state => state.user.userInfo)

    return (
        <div className={styles.userBanner} >
            <TextValueComponent value={username} title />
        </div>
    )
}

export default UserBannerComponent
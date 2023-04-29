import { Outlet }           from 'react-router-dom'
import SidebarComponent     from '../../sidebar/sidebar.component'
import styles               from './sidebar.layout.component.scss'

/**
 * Layout with sidebar
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <SidebarLayoutComponent />
 * )
 */
const SidebarLayoutComponent = () => {

    return (
        <div className={styles.sidebarLayout} >
            <SidebarComponent />
            <Outlet />
        </div>
    )
}

export default SidebarLayoutComponent
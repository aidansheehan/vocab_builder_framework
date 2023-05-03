import { Outlet }           from 'react-router-dom'
import HeaderComponent      from '../../header/header.component'
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
            <HeaderComponent style={styles.sidebarHeader} />
            <SidebarComponent />
            <Outlet />
        </div>
    )
}

export default SidebarLayoutComponent
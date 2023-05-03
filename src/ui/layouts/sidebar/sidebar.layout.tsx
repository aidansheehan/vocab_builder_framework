import { Outlet }           from 'react-router-dom'
import HeaderComponent      from '../../components/header/header.component'
import SidebarComponent     from '../../components/sidebar/sidebar.component'
import styles               from './sidebar.layout.scss'

/**
 * Layout with sidebar
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <SidebarLayout />
 * )
 */
const SidebarLayout = () => {

    return (
        <div className={styles.sidebarLayout} >
            <HeaderComponent style={styles.sidebarHeader} />
            <SidebarComponent />
            <Outlet />
        </div>
    )
}

export default SidebarLayout
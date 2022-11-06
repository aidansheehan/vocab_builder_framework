import { Outlet } from 'react-router-dom'
import HeaderComponent from '../components/header/header.component'
import FooterComponent from '../components/footer/footer.component'

/**
 * Main layout for app
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <Root />
 * )
 */

//TODO probably rename as MainRoot or MainLayout (inside dir Layouts)
const Root = () => {

    return (
        <div id="root-component">
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default Root
import { Outlet }       from "react-router-dom"
import FooterComponent  from "../components/footer/footer.component"
import HeaderComponent  from "../components/header/header.component"

/**
 * Main layout for app
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <MainLayout />
 * )
 */
const MainLayout = (): JSX.Element => {

    //TODO select main routes and pass to header component as props for navigation

    return (
        <div id="main-layout">
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default MainLayout
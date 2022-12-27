import { Outlet } from "react-router-dom"
import FooterComponent from "../components/footer/footer.component"
import HeaderComponent from "../components/header/header.component"

/**
 * Generic layout component for App
 * May be split into seperate auth / !auth layouts in future
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *  <AppLayout />
 * )
 */
const AppLayout = () => {

    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default AppLayout
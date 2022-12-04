import { Outlet } from "react-router-dom"
import FooterComponent from "../../components/footer/footer.component"
import HeaderComponent from "../../components/header/header.component"

/**
 * Generic unprotected route
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <UnprotectedRoute />)
 */
const UnprotectedRoute = () => {

    //return child route elements
    return (
        <div id='unprotected-route'>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />

        </div>
    )
}

export default UnprotectedRoute
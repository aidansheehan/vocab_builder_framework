import { Outlet }       from "react-router-dom"
import HeaderComponent  from "../components/header/header.component"

/**
 * Layout when awaiting Auth
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <AuthLayout />
 * )
 */
const AuthLayout = () => {

    //Todo select auth routes and pass to header component to loop over and generate nav

    return (
        <div id="auth-layout">
            <HeaderComponent />
            <Outlet />
            <div>
                I'm not the footer component!
            </div>
        </div>
    )
}

export default AuthLayout
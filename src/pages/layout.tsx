import { Outlet }       from "react-router-dom";
import FooterComponent  from "../components/footer/footer.component";
import HeaderComponent  from "../components/header/header.component";

/**
 * Layout
 */
const Layout = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>

    );
};

export default Layout;
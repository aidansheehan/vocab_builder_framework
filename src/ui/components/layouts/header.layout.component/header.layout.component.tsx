import { Outlet }       from 'react-router-dom'
import FooterComponent  from '../../footer/footer.component'
import HeaderComponent  from '../../header/header.component'

/**
 * Layout with header
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderLayoutComponent />)
 */
const HeaderLayoutComponent = () => {

    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )

}

export default HeaderLayoutComponent
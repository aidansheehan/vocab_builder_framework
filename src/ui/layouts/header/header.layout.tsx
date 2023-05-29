import { Outlet }       from 'react-router-dom'
import FooterComponent  from '../../components/footer/footer.component'
import HeaderComponent  from '../../components/header/header.component'
import './header.layout.scss'

/**
 * Layout with header
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderLayout />)
 */
const HeaderLayout = () => {

    //Header logo links to landing page
    const linkTo = '/'

    return (
        <>
            <HeaderComponent linkTo={linkTo}  />
            <Outlet />
            <FooterComponent />
        </>
    )

}

export default HeaderLayout
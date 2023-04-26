//Core
// import { useState } from 'react'
//Router
// import { useLocation, useNavigate } from 'react-router-dom'
//Redux
// import useAppSelector from '../../hooks/redux/use-app-selector.hook'
//Components
// import HeaderMenuComponent          from './components/header-menu/header-menu.component'
import LocaleSelectorComponent      from '../locale-selector/locale-selector.component'
// import MenuBtnComponent             from './components/menu-btn/menu-btn.component'
// import ButtonComponent              from '../button/button.component'
import LogoComponent                from '../logo.component/logo.component'
//Constants
// import HEADER_ITEMS_PRIVATE_CONFIG  from './components/header-menu/constants/header-menu.header-items-private-config.constant'
// import HEADER_ITEMS_PUBLIC_CONFIG   from './components/header-menu/constants/header-menu.header-items-public-config.constant'
//Hooks
import useDevice from '../../hooks/useDevice.hook'
//Styles
import styles from './header.component.scss'

/**
 * Header component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderComponent />
 * )
 */
const HeaderComponent = (): JSX.Element => {

    // const { userInfo }   = useAppSelector((state) => state.user) //Destructure user state

    //Menu expanded flag
    // const [ expanded, setExpanded ] = useState<boolean>(false)

    const device    = useDevice()
    // const navigate  = useNavigate()
    // const location  = useLocation()

    // //Function to toggle menu expanded
    // const toggleMenuExpanded = () => {
    //     setExpanded(!expanded)
    // }

    return (
        <div className={styles.header} >

            <LogoComponent style={styles.headerLogo} />

            {
                device !== 'mobile'
                ?
                <LocaleSelectorComponent style={styles.headerLocaleSelector} dropdown />
                :
                <></>
            }

        </div>
    )

    //TODO - remove & delete unused components, but may want to reuse some logic and components for sidebar
    // return (
    //         <div className={styles.header}>

    //             <div className={styles.headerLeft} >
    //                 <LogoComponent style={styles.headerLogo} />
    //             </div>


    //             <div className={styles.headerRight} >

    //                 <nav className={styles.headerNav}>
    //                     {userInfo ? (

    //                             <ButtonComponent style={styles.helpButton} onClick={() => navigate('/user/help', {state: {backgroundLocation: location}})} icon='circle-question' />
    //                     ) : (
    //                         <>
    //                             {
    //                                 device !== 'mobile' ?
    //                                 <ButtonComponent onClick={() => navigate('/auth/login', {state: {backgroundLocation: location}})} textRef='nav_login_link' style={styles.headerButton} primary />
    //                                 :
    //                                 <></>
    //                             }

    //                             <LocaleSelectorComponent style={styles.headerLocaleSelector} />

    //                         </>
    //                     )}
    //                     { userInfo ? <MenuBtnComponent expanded={expanded} handleClick={toggleMenuExpanded} /> : <></> }

    //                 </nav>

    //             </div>
                
    //             <HeaderMenuComponent config={ userInfo ? HEADER_ITEMS_PRIVATE_CONFIG : HEADER_ITEMS_PUBLIC_CONFIG } expanded={expanded} toggleExpanded={toggleMenuExpanded} />

    //         </div>
    // )
}

export default HeaderComponent;
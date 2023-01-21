//Core
import { useState } from 'react'
//Router
import { useNavigate } from 'react-router-dom'
//Redux
import useAppSelector from '../../hooks/redux/use-app-selector.hook'
//Components
import ButtonPrimaryComponent       from '../button/components/button-primary.component'
import HeaderMenuComponent          from '../header-menu/header-menu.component'
import LocaleSelectorComponent      from '../locale-selector/locale-selector.component'
import MenuBtnComponent             from '../menu-btn/menu-btn.component'
//Constants
import HEADER_ITEMS_PRIVATE_CONFIG  from '../header-menu/constants/header-menu.header-items-private-config.constant'
import HEADER_ITEMS_PUBLIC_CONFIG   from '../header-menu/constants/header-menu.header-items-public-config.constant'
//Styles
import styles                           from './header.component.scss'
import useDevice from '../../hooks/useDevice.hook'
import ButtonComponent from '../button/button.component'

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

    const { userInfo }   = useAppSelector((state) => state.user) //Destructure user state

    //Menu expanded flag
    const [ expanded, setExpanded ] = useState<boolean>(false)

    const device    = useDevice()
    const navigate  = useNavigate()

    //Function to toggle menu expanded
    const toggleMenuExpanded = () => {
        setExpanded(!expanded)
    }

    return (
            <div className={styles.header}>

                <div className={styles.headerLeft} >
                    <span className={styles.logo}>Flashcard Factory</span>
                </div>


                <div className={styles.headerRight} >

                    <nav className={styles.headerNav}>
                        {userInfo ? (

                                <ButtonComponent onClick={() => navigate('/user/help')} icon='circle-question' />
                        ) : (
                            <>
                                {
                                    device !== 'mobile' ?
                                    <>
                                        <ButtonPrimaryComponent onClick={() => navigate('/register')} textRef='nav_register_link' style={styles.headerButton} />
                                        <ButtonPrimaryComponent onClick={() => navigate('/login')} textRef='nav_login_link' style={styles.headerButton} />
                                    </>
                                    :
                                    <></>
                                }

                                <LocaleSelectorComponent style={styles.headerLocaleSelector} />

                            </>
                        )}
                        <MenuBtnComponent expanded={expanded} handleClick={toggleMenuExpanded} />

                    </nav>

                </div>
                
                {/* TODO render auth config or not auth config (need better names) based on whether userInfo */}
                <HeaderMenuComponent config={ userInfo ? HEADER_ITEMS_PRIVATE_CONFIG : HEADER_ITEMS_PUBLIC_CONFIG } expanded={expanded} toggleExpanded={toggleMenuExpanded} />

            </div>
    )
}

export default HeaderComponent;
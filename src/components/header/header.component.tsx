import { useState }                     from 'react'
import { NavLink }                      from 'react-router-dom'
import useAppSelector                   from '../../hooks/redux/use-app-selector.hook'
import HEADER_ITEMS_AUTH_CONFIG         from '../header-menu/constants/header-menu.header-items-auth-config.constant'
import HeaderMenuComponent              from '../header-menu/header-menu.component'
import IconComponent                    from '../icon/icon.component'
import LocaleSelectorComponent          from '../locale-selector/locale-selector.component'
import MenuBtnComponent                 from '../menu-btn/menu-btn.component'
import TextComponent                    from '../text/text.component'
import styles                           from './header.component.scss'

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
                            <>
                                {/* TODO implement help page */}
                                <NavLink role='nav-link' data-testid='collections-link' to={`user/help`}>
                                    {/* TODO should render <TextComponent /> with 'help' on hover */}
                                    <IconComponent icon={{icon: 'circle-question'}} />
                                </NavLink>
                                <MenuBtnComponent expanded={expanded} handleClick={toggleMenuExpanded} />
                            </>
                        ) : (
                            <>
                                <LocaleSelectorComponent style={styles.headerLocaleSelector} />
                                <NavLink role='nav-link' data-testid='login-link' to={`/login`}>
                                    <TextComponent textRef='nav_login_link' />
                                </NavLink>

                                <NavLink role='nav-link' data-testid='landing-link' to={`/`} >
                                    {/* TODO should render <TextComponent textRef='nav_home_link' /> on hover */}
                                    <IconComponent icon={{icon: 'house'}} />
                                </NavLink>

                            </>
                        )}

                    </nav>

                </div>
                
                {/* TODO render auth config or not auth config (need better names) based on whether userInfo */}
                <HeaderMenuComponent config={/* userInfo ? */HEADER_ITEMS_AUTH_CONFIG} expanded={expanded} toggleExpanded={toggleMenuExpanded} />

            </div>
    )
}

export default HeaderComponent;
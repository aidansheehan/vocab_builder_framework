import { useEffect }                    from 'react';
import { useIntl }                      from 'react-intl';
import { NavLink }                      from 'react-router-dom';
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook';
import useAppSelector                   from '../../hooks/redux/use-app-selector.hook';
import { getUserDetails }               from '../../redux/features/user/user.actions';
import { logout }                       from '../../redux/features/user/user.slice';
import LocaleSelectorComponent          from '../locale-selector/locale-selector.component';
import TextComponent                    from '../text/text.component';
import styles                           from './header.component.scss';

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

    /** Dispatch getUserDetails when userToken changes - TODO can this logic go somewhere more sensible */
    const { userInfo, userToken }   = useAppSelector((state) => state.user)    //Destructure user state
    const dispatch                  = useAppDispatch()                         //Init useAppDispatch

    //Logic for handling links to localized routes
    const intl          = useIntl() //Get current locale object
    const { locale }    = intl      //Destructure locale object

    //automatically authenticate user if token is found
    useEffect(() => {
        if (userToken) {

            dispatch(getUserDetails())
        }
    }, [ userToken, dispatch ])

    return (
            <div className={styles.header}>
                <span>
                    {userInfo ? `Logged in as ${userInfo.username}` : 'You\'re not logged in'}
                </span>

                <nav>
                    {userInfo ? (
                        <>
                            {/* TODO this should be generic button component */}
                            <button role='nav-link' data-testid='logout-link' onClick={() => dispatch(logout())}>
                                <TextComponent textRef='nav_logout_link_title' />
                            </button>
                            <NavLink role='nav-link' data-testid='collections-link' to={`/${locale}/collections`}>
                                <TextComponent textRef='nav_collections_link_title' />
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink role='nav-link' data-testid='landing-link' to={`/${locale}`} >
                                <TextComponent textRef='nav_home_link_title' />
                            </NavLink>
                            <NavLink role='nav-link' data-testid='login-link' to={`/${locale}/login`}>
                                <TextComponent textRef='nav_login_link_title' />
                            </NavLink>
                            <NavLink role='nav-link' data-testid='register-link' to={`/${locale}/register`}>
                                <TextComponent textRef='nav_register_link_title' />
                            </NavLink>
                        </>
                    )}

                </nav>
                
                <LocaleSelectorComponent />
            </div>
    )
}

export default HeaderComponent;
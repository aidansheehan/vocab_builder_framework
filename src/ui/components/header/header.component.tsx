import { NavLink }                      from 'react-router-dom';
import useAppDispatch                   from '../../../hooks/redux/use-app-dispatch.hook';
import useAppSelector                   from '../../../hooks/redux/use-app-selector.hook';
import { logout }                       from '../../../redux/features/user/user.slice';
import ButtonComponent                  from '../button/button.component';
import IconComponent                    from '../icon/icon.component';
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

    const { userInfo }   = useAppSelector((state) => state.user) //Destructure user state

    const dispatch = useAppDispatch() //Init useAppDispatch

    return (
            <div className={styles.header}>

                <div className={styles.headerLeft} >
                    <span className={styles.logo}>VOCAB BUILDER</span>
                </div>


                <div className={styles.headerRight} >

                    <nav>
                        {userInfo ? (
                            <>
                                <LocaleSelectorComponent style={styles.headerLocaleSelector} />
                                <NavLink role='nav-link' data-testid='collections-link' to={`/collections`}>
                                    {/* TODO should render <TextComponent textRef='nav_collections_link' /> on hover */}
                                    <IconComponent icon={{icon: 'house'}} />
                                </NavLink>
                                <NavLink role='nav-link' to={'/collections/new'}>
                                    {/* TODO should render <TextComponent textRef='nav_new-collection_link' /> on hover */}
                                    <IconComponent icon={{icon: 'file-circle-plus'}} />
                                </NavLink>
                                <ButtonComponent
                                    // textRef='nav_logout_link' TODO should render as text component popup on hover
                                    icon='right-from-bracket'
                                    onClick={() => dispatch(logout())}
                                    style={styles.logoutButton}
                                />
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
            </div>
    )
}

export default HeaderComponent;
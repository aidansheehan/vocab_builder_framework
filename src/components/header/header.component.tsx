import { NavLink }                      from 'react-router-dom';
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook';
import useAppSelector                   from '../../hooks/redux/use-app-selector.hook';
import useDevice from '../../hooks/useDevice.hook';
import { logout }                       from '../../redux/features/user/user.slice';
import ButtonComponent                  from '../button/button.component';
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

    const { userInfo }   = useAppSelector((state) => state.user)    //Destructure user state
    
    const dispatch  = useAppDispatch()  //Init useAppDispatch
    const device    = useDevice()       //get device

    return (
            <div className={styles.header}>

                <div className={styles.headerLeft} >
                    <span className={styles.logo}>VOCAB BUILDER</span>
                    {device !== 'mobile' && <LocaleSelectorComponent />}
                </div>


                <div className={styles.headerRight} >

                    {
                        device !== 'mobile' && 

                        <nav>
                        {userInfo ? (
                            <>
                                <NavLink role='nav-link' data-testid='collections-link' to={`/collections`}>
                                    <TextComponent textRef='nav_collections_link' />
                                </NavLink>
                                <NavLink role='nav-link' to={'/collections/new'}>
                                    <TextComponent textRef='nav_new-collection_link' />
                                </NavLink>
                                <ButtonComponent
                                    textRef='nav_logout_link'
                                    onClick={() => dispatch(logout())}
                                    style={styles.logoutButton}
                                />
                            </>
                        ) : (
                            <>
                                <NavLink role='nav-link' data-testid='landing-link' to={`/`} >
                                    <TextComponent textRef='nav_home_link' />
                                </NavLink>
                                <NavLink role='nav-link' data-testid='login-link' to={`/login`}>
                                    <TextComponent textRef='nav_login_link' />
                                </NavLink>
                                <NavLink role='nav-link' data-testid='register-link' to={`/register`}>
                                    <TextComponent textRef='nav_register_link' />
                                </NavLink>
                            </>
                        )}

                    </nav>
                    }

                </div>
            </div>
    )
}

export default HeaderComponent;
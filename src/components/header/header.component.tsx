import { useEffect }                    from 'react';
import { useIntl }                      from 'react-intl';
import { NavLink }                      from 'react-router-dom';
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook';
import useAppSelector                   from '../../hooks/redux/use-app-selector.hook';
import { getUserDetails }               from '../../redux/features/user/user.actions';
import { logout }                       from '../../redux/features/user/user.slice';
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
                            <button onClick={() => dispatch(logout())}>
                                Logout
                            </button>
                            <NavLink to={`${locale}/collections`}>
                                My Collections
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink to={`/${locale}`} >
                                Home
                            </NavLink>
                            <NavLink to={`/${locale}/login`}>
                                Login
                            </NavLink>
                            <NavLink to={`/${locale}/register`}>
                                Register
                            </NavLink>
                        </>
                    )}

                </nav>
                
                I am the header
            </div>
    )
}

export default HeaderComponent;
import { useEffect }                    from 'react';
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
const HeaderComponent = () => {

    /** Dispatch getUserDetails when userToken changes - TODO can this logic go somewhere more sensible */
    const { userInfo, userToken }   = useAppSelector((state) => state.user)    //Destructure user state
    const dispatch                  = useAppDispatch()                         //Init useAppDispatch

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
                
                <div>
                    {userInfo ? (
                        <button onClick={() => dispatch(logout())} role='nav-link' >
                            Logout
                        </button>
                    ) : (
                        <NavLink to='/login' data-testid='login-link' role='nav-link'>
                            Login
                        </NavLink>
                    )}
                </div>

                <nav>
                    <NavLink to='/' data-testid='landing-link' role='nav-link' >Landing Page</NavLink>
                    <NavLink to='/register' data-testid='register-link' role='nav-link' >Register</NavLink>
                    <NavLink to='/collections' role='nav-link' >Profile</NavLink>
                </nav>
                
                I am the header
            </div>
    )
}

export default HeaderComponent;
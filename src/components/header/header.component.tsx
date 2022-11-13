import { useEffect }                    from 'react';
import { useDispatch, useSelector }     from 'react-redux'
import { NavLink }                      from 'react-router-dom';
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
    //@ts-ignore
    const { userInfo, userToken }   = useSelector((state) => state.user)    //Destructure user state
    const dispatch                  = useDispatch()                         //Init useDispatch

    //automatically authenticate user if token is found
    useEffect(() => {
        if (userToken && Object.keys(userToken).length) {

            //@ts-ignore
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
                        <button onClick={() => dispatch(logout())} >
                            Logout
                        </button>
                    ) : (
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    )}
                </div>

                <nav>
                    <NavLink to='/'>Landing Page</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/collections'>Profile</NavLink>
                </nav>
                
                I am the header
            </div>
    )
}

export default HeaderComponent;
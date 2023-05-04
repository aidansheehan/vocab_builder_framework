import { Outlet }       from 'react-router-dom'
import styles           from './auth.layout.scss'

/**
 * Generic layout for authorization pages (login, register)
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <AuthLayout />
 * )
 */
const AuthLayout = () => {

    return (
        <div className={styles.authPage}>

                <Outlet />

        </div>
    )

}

export default AuthLayout
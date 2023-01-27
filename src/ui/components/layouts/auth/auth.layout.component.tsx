import { Outlet } from 'react-router-dom'
import styles from './auth.layout.component.scss'

/**
 * Generic layout for authorization pages (login, register)
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <AuthLayoutComponent />
 * )
 */
const AuthLayoutComponent = () => {

    return (
        <div className={styles.authPage}>

            <div className={styles.authImage}>

            </div>

            <div className={styles.authContent}>

                <Outlet />

            </div>

        </div>
    )

}

export default AuthLayoutComponent
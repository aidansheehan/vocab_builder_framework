import classNames               from 'classnames'
import { useEffect, useState }  from 'react'
import { useLocation }          from 'react-router-dom'
import styles                   from './footer.component.scss'

/**
 * Footer Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <FooterComponent />
 * )
 */
const FooterComponent = () => {

    //Landing page flag to apply additional styles TODO remove
    const [ isLanding, setIsLanding ] = useState<boolean>(false)

    const location = useLocation()

    useEffect(() => {

        //If root route
        if (location.pathname === '/') {

            //Set landing page flag true
            setIsLanding(true)
        }
    }, [location.pathname])

    // Component className
    const className = classNames(styles.footer, { [styles.footerLanding]: isLanding })

    return (
        <div className={className} >
            <span>© Aidan Sheehan 2023</span>
        </div>
    )
}

export default FooterComponent
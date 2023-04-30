import { useNavigate }                  from 'react-router-dom'
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook'
import useDevice                        from '../../hooks/useDevice.hook'
import ImageComponent                   from '../image/image.component'
import LogoComponent                    from '../logo.component/logo.component'
import SidebarButtonComponent           from './components/sidebar.button.component'
import SIDEBAR_ITEMS_CONFIG_CONSTANT    from './constants/sidebar-items-config.constant'
import styles                           from './sidebar.component.scss'

/**
 * Sidebar component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * children = <div></div>
 * return (
 *   <SidebarComponent children={children} />
 * )
 */
const SidebarComponent = (): JSX.Element => {

    const device    = useDevice()
    const navigate  = useNavigate()
    const dispatch  = useAppDispatch()

    //Handle navigate button click
    const handleNavigate = (route: string, isModal?: boolean) => {

        //Navigate to chosen route
        if (isModal) {
            navigate(route, {state: {backgroundLocation: location}})
        } else {
            navigate(route)
        }

    }

    //Handle dispatch button click
    const handleDispatch = (callback: Function) => {

        //Dispatch reducer function
        dispatch(callback())
    }

    return (
        <div className={styles.sidebar} >
            {
                device === 'desktop'
                ?
                <LogoComponent style={styles.sidebarLogo} />
                :
                <ImageComponent style={styles.sidebarLogo} id='logo' />
            }

            {
                SIDEBAR_ITEMS_CONFIG_CONSTANT.routeButtons.map((v_, i_) => {

                    const { route, icon, reference, devices, isModal } = v_     //Destructure config

                    //Determine if current route
                    const isActive = location.pathname === route

                    if (devices) {

                        return devices.includes(device) && <SidebarButtonComponent key={i_} handleClick={() => handleNavigate(route, isModal)} icon={icon} reference={reference} active={isActive} />
                    }

                    else {
                        return <SidebarButtonComponent key={i_} handleClick={() => handleNavigate(route, isModal)} icon={icon} reference={reference} active={isActive} />
                    }

                })
            }

            {
                SIDEBAR_ITEMS_CONFIG_CONSTANT.dispatchButtons?.map((v_, i_) => {

                    const { callback, icon, reference, devices } = v_   //Destructure config

                    if (devices) {
                        return devices.includes(device) && <SidebarButtonComponent key={i_} handleClick={() => handleDispatch(callback)} icon={icon} reference={reference} />
                    }

                    else {
                        return <SidebarButtonComponent key={i_} handleClick={() => handleDispatch(callback)} icon={icon} reference={reference} />
                    }
                })
            }

        </div>
    )
}

export default SidebarComponent
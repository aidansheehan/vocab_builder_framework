import styles                           from './header-menu.component.scss'
import { HeaderItemsConfigType }        from './types/header-menu.header-items-config.type'
import { Transition }                   from 'react-transition-group'
import HeaderMenuButtonComponent        from '../header-menu-button/header-menu-button.component'
import { useNavigate }                  from 'react-router-dom'
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook'
import useDevice                        from '../../hooks/useDevice.hook'

/** HeaderMenuComponentProps type */
type HeaderMenuComponentProps = {

    /** Header Menu Config */
    config: HeaderItemsConfigType,

    /** Whether open */
    expanded: boolean,

    /** Toggle expanded */
    toggleExpanded: () => void

}

/**
 * Header menu component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @component
 * @example
 * return (
 *   <HeaderMenuComponent />
 * )
 */
const HeaderMenuComponent = (props: HeaderMenuComponentProps): JSX.Element => {

    const { config, expanded, toggleExpanded } = props  //Destructure props

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const TRANSITION_TIMER = 350;


    const MENU_DEFAULT_STYLE: { [device: string]: React.CSSProperties } = {
        desktop: {
            transform: 'translateX(100%)',
            transition: `transform ${TRANSITION_TIMER}ms ease`
        },
        tablet: {
            transform: `translateY(-100%)`,
            transition: `transform ${TRANSITION_TIMER}ms ease`
        },
        mobile: {
            transform:'translateY(-100%)',
            transition: `transform ${TRANSITION_TIMER}ms ease`
        }
    }

    const MENU_TRANSITION_STYLES: { [device: string]: { [id: string]: React.CSSProperties } } = {
        desktop: { entered: { transform: 'translateX(0)' } },
        tablet: { entered: { transform: 'translateY(0)' } },
        mobile: { entered: { transform: 'translateY(0)' } }
    }

    //Handle navigate button click
    const handleNavigate = (route: string) => {

        //Close header menu
        toggleExpanded()

        //Navigate to chosen route
        navigate(route)

    }

    //Handle dispatch button click
    const handleDispatch = (callback: Function) => {

        //Close header menu
        toggleExpanded()

        //Dispatch reducer function
        dispatch(callback())
    }

    const device = useDevice()

    return (
        <>
        
            <Transition in={expanded} timeout={TRANSITION_TIMER} unmountOnExit >

                {(state) => (

                    <div className={styles.headerMenu} style={{...MENU_DEFAULT_STYLE[device], ...MENU_TRANSITION_STYLES[device] && MENU_TRANSITION_STYLES[device][state]}} >

                        {config.routeButtons.map((v_, i_) => {

                            const { route, icon, ref } = v_    //Destructure config

                            //If menu button displayed only on certain devices TBD
                            const devices = false

                            if (devices) {
                                //TBD
                            }

                            else {
                                return <HeaderMenuButtonComponent key={i_} handleClick={() => handleNavigate(route)} icon={icon} label={ref} style={i_ === 0 && styles.headerMenuButtonFirst}/>
                            }


                        })}

                        {config.dispatchButtons.map((v_, i_) => {

                            const { callback, icon, ref } = v_  //Destructure config

                            //If menu button displayed only on certain devices TBD
                            const devices = false

                            if (devices) {
                                //TBD
                            }

                            else {
                                return <HeaderMenuButtonComponent key={i_} handleClick={() => handleDispatch(callback)} icon={icon} label={ref}  />
                            }

                        })}

                    </div>
                )}

            </Transition>
        </>
    )

}

export default HeaderMenuComponent
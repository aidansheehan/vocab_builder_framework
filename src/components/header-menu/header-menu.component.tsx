// import React                            from 'react'
import styles                           from './header-menu.component.scss'
import { HeaderItemsConfigType }        from './types/header-menu.header-items-config.type'
import { Transition }                   from 'react-transition-group'
import HeaderMenuButtonComponent from '../header-menu-button/header-menu-button.component'
import { useNavigate } from 'react-router-dom'

/** HeaderMenuComponentProps type */
type HeaderMenuComponentProps = {

    /** Header Menu Config */
    config: HeaderItemsConfigType,

    /** Whether open */
    expanded: boolean

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

    const { config, expanded } = props

    //TODO some buttons don't navigate eg logout. so need to find a way to pass custom functions into HeaderMenuButton. You could have custom hooks? Then can probably use in config not as functions like onClick: useLogout in HeaderButtonConfig...
    const navigate = useNavigate()

    const TRANSITION_TIMER = 350;

    const device = 'desktop'    //TODO need useDevice hook implemented on this ticket VBF-43

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

    return (
        <>
        
            <Transition in={expanded} timeout={TRANSITION_TIMER} unmountOnExit >

                {(state) => (

                    <div className={styles.headerMenu} style={{...MENU_DEFAULT_STYLE[device], ...MENU_TRANSITION_STYLES[device] && MENU_TRANSITION_STYLES[device][state]}} >

                        {config.buttons.map((v_, i_) => {

                            const { route, icon, ref } = v_    //Destructure config

                            //If menu button displayed only on certain devices TBD
                            const devices = false

                            if (devices) {
                                //TBD
                            }

                            else {
                                return <HeaderMenuButtonComponent key={i_} handleClick={() => navigate(route)} icon={icon} label={ref} style={i_ === 0 && styles.headerMenuButtonFirst}/>
                            }


                        })}
                    </div>
                )}

            </Transition>
        </>
    )

}

export default HeaderMenuComponent
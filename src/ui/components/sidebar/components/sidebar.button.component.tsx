import classNames       from 'classnames'
import ButtonComponent  from '../../button/button.component'
import IconComponent    from '../../icon/icon.component'
import TextComponent    from '../../text/text.component'
import styles           from './sidebar.button.component.scss'

/** SidebarButtonComponentProps */
type SidebarButtonComponentProps = {

    /** Text reference */
    reference: string,

    /** FontAwesome icon to display */
    icon: string,

    /** Click Handler */
    handleClick: () => void,

    /** Whether route active */
    active?: boolean,

    /** Additional styles to be applied */
    style?: string

}

/**
 * Generic sidebar button component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let icon='trophy'
 * let reference = 'home'
 * return (
 *   <SidebarButtonComponent icon={icon} reference={reference} />
 * )
 */
const SidebarButtonComponent = (props: SidebarButtonComponentProps): JSX.Element => {

    //Destructure props
    const { reference, icon, handleClick, style, active } = props

    //Component className
    const className = classNames(styles.sidebarButton, { [styles.active]: active }, style)

    //Construct JSX to pass to button component to render as children
    const sidebarButtonComponentJsx: JSX.Element = (
        <>
            <IconComponent icon={ {icon: icon} } style={styles.sidebarButtonIcon} />
            <TextComponent textRef={reference} style={styles.sidebarButtonText} />
        </>
    )

    return (
        <ButtonComponent 
            style={className}
            onClick={handleClick}
            children={sidebarButtonComponentJsx}
        />
    )

}

export default SidebarButtonComponent
import styles           from './header-menu-button.component.scss'
import classNames       from 'classnames'
import IconComponent    from '../icon/icon.component'
import TextComponent    from '../text/text.component'
import ButtonComponent  from '../button/button.component'

/** HeaderMenuButtonComponentProps */
type HeaderMenuButtonComponentProps = {

    /** FontAwesome icon to display */
    icon: string,

    /** Text Reference */
    label: string

    /** click handler */
    handleClick: () => void,

    /** Additional styles to be applied */
    style?: string

}

/**
 * Button component to open header menu
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderMenuButtonComponent />
 * )
 */
const HeaderMenuButtonComponent = (props: HeaderMenuButtonComponentProps): JSX.Element => {

    const { icon, label, handleClick, style } = props  //Destructure props

    const className = classNames(styles.headerMenuButton, style)

    const headerMenuButtonJsx: JSX.Element = (
        <>
            <IconComponent icon={{ icon: icon }} />
            <TextComponent textRef={label} />
        </>
    )

    return (
        <ButtonComponent 
            style={className}
            onClick={handleClick}
            children={headerMenuButtonJsx}
        />
    )

}

export default HeaderMenuButtonComponent
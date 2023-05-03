import { FontAwesomeIcon, FontAwesomeIconProps }    from '@fortawesome/react-fontawesome'
import classNames                                   from 'classnames'
import styles                                       from './icon.component.scss'

/** IconComponentProps */
type IconComponentProps = {

    /** FontAwesome icon config */
    icon:   { [key in keyof FontAwesomeIconProps]: any },

    /** Additional styles to be applied */
    style?: string

}

/**
 * Component for displaying a FontAwesome icon
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @param {IconComponentProps} props IconComponentProps
 * @component
 * @example
 * const icon = { icon: 'trophy' }
 * return (
 *  <IconComponent icon={icon} />
 * )
 */
const IconComponent = (props: IconComponentProps) => {

    const { icon, style } = props  //Destructure props

    //Component className
    const className = classNames(styles.icon, style)

    return <FontAwesomeIcon className={className} {...icon} />

}

export default IconComponent
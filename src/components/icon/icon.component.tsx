import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

/** IconComponentProps */
type IconComponentProps = {

    /** FontAwesome icon config */
    icon:   { [key in keyof FontAwesomeIconProps]: any }

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

    const { icon } = props  //Destructure props

    return <FontAwesomeIcon {...icon} />

}

export default IconComponent
import classNames               from 'classnames'
import ButtonComponent          from '../button.component'
import { ButtonComponentProps } from '../types/button.component.props.type'
import styles                   from './button-primary.component.scss'

/**
 * Styled 'Primary' button component for CTAs, etc
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let onClick = () => alert('I got clicked');
 * let text = 'text-reference'
 * return (
 *   <ButtonPrimaryComponent onClick={onClick} text={text}) />
 * )
 */
const ButtonPrimaryComponent = (props: ButtonComponentProps) => {

    const { onClick, children, textRef, style, icon, disabled } = props   //Destructure props

    const className = classNames(styles.buttonPrimary, style)

    return (
        <ButtonComponent
            onClick={onClick}
            children={children}
            textRef={textRef}
            style={className}
            icon={icon}
            disabled={disabled}
        />
    )
}

export default ButtonPrimaryComponent
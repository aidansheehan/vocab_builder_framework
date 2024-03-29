import classNames               from 'classnames'
import TextComponent            from '../text/text.component'
import IconComponent            from '../icon/icon.component'
import styles                   from './button.component.scss'
import { ButtonComponentProps } from './types/button.component.props.type'

/**
 * Generic Button Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let onClick=() => alert('I got clicked');
 * let text = 'text-reference';
 * return (
 *   <ButtonComponent onClick={onClick} text={text} />)
 */
const ButtonComponent = (props: ButtonComponentProps) => {

    const { onClick, children, textRef, style, icon, disabled, type, primary, secondary, warning } = props   //Destructure props

    const className = classNames(styles.button, style, {
        [styles.secondary]: !!secondary,
        [styles.primary]: !!primary,
        [styles.warning]: !!warning,
        [styles.disabled]: disabled
    })

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {icon ? <IconComponent icon={{icon}} /> : null}
            {textRef ? <TextComponent textRef={textRef} /> : null }
            { children ? children : null }
        </button>
    )
}

export default ButtonComponent
import { MouseEventHandler } from 'react'
import styles from './button.component.scss'
import classNames from 'classnames'
import TextComponent from '../text/text.component'
import IconComponent from '../icon/icon.component'

/** ButtonComponent Props Type */
type ButtonComponentPropsType = {

    /** Function to execute on button click TODO should this maybe be handled within button? */
    onClick: MouseEventHandler<HTMLButtonElement>,

    /** Children to render */
    children?: JSX.Element,

    /** Reference for text to display in the button */
    textRef?: string,

    /** Font Awesome icon reference */
    icon?: string

    /* Additional Styles to be applied */
    style?: string

}

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
const ButtonComponent = (props: ButtonComponentPropsType) => {

    const { onClick, children, textRef, style, icon } = props   //Destructure props

    const className = classNames(styles.button, style)

    return (
        <button
            className={className}
            onClick={onClick}
        >
            { textRef ? <TextComponent textRef={textRef} /> : null }
            { icon ? <IconComponent icon={{icon}} /> : null }
            { children && children }
        </button>
    )
}

export default ButtonComponent
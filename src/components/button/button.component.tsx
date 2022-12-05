import classNames from 'classnames'
import { MouseEventHandler } from 'react'
import styles from './button.component.scss'

/** Button Component Props Type */
type ButtonComponentPropsType = {

    /** Function to execute on button click */
    onClick: MouseEventHandler<HTMLButtonElement>,

    /** Reference for text to display in the button TODO this needs VB-22 */
    textRef?: string,

    /** faRef? TODO this needs font awesome implemented VBF-34 */

    /** Additional styles to be applied */
    style?: string
}

/**
 * Generic Button Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let onClick=() => alert("I got clicked");
 * let text = 'Example Button';
 * return (
 *   <ButtonComponent onClick={onClick} text={text} />
 * )
 */
const ButtonComponent = (props: ButtonComponentPropsType) => {

    const { onClick, textRef, style } = props  //Destructure props

    const className = classNames(styles.button, style )

    return (
        <button 
            className={className}
            onClick={onClick}
         >
            {textRef}
        </button>
    )
}

export default ButtonComponent
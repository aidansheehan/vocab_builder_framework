import { MouseEventHandler } from 'react'

/** ButtonComponent Props Type */
export type ButtonComponentProps = {

    /** Function to execute on button click */
    onClick: MouseEventHandler<HTMLButtonElement>,

    /** Children to render */
    children?: JSX.Element,

    /** Reference for text to display in the button */
    textRef?: string,

    /** Font Awesome icon reference */
    icon?: string,

    /** Additional styles to be applied */
    style?: string,

    /** Whether button disabled */
    disabled?: boolean,

    /** Type of button if needed */
    type?: 'button' | 'submit' | 'reset',

    /** Whether a 'primary' button for styling */
    primary?: boolean,

    /** Whether a 'secondary' button for styling */
    secondary?: boolean

}
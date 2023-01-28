import { MouseEventHandler } from 'react'

/** AuthFormButtonConfig type */
export type AuthFormButtonConfig = {

    /** Function to execute on click */
    handleClick: MouseEventHandler<HTMLButtonElement>,

    /** Reference for localized button text */
    textReference: string,

}
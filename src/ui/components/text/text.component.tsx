import { useIntl } from 'react-intl'

/** TextComponent props */
type TextComponentPropsType = {

    /** Text Reference */
    textRef: string,

    /** Values to display in string */
    values?: (string | number)[],

    /** Additional styles to be applied */
    style?: string,

    /** Whether to use h2 */
    title?: boolean

}

/**
 * Generic Text Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *  let textRef = 'test-text'
 *   <TextComponent textRef={textRef} />
 * )
 */
const TextComponent = (props: TextComponentPropsType) => {

    const { textRef, values, style, title } = props   //Destructure props

    const intl = useIntl()

    //Retrieve localized message
    let message = intl.formatMessage({ id: textRef })

    //If values to substitute
    if (values && values.length) {
        
        //Loop through values
        values.forEach((v_) => {

            //Replace the next instance of placeholder %v with the value
            message = message.replace(/%v/, `${v_}`)

        })

    }

    return (
        <>
        {
            title
            ?
            <h2 className={style}>
                {message}
            </h2>
            :
            <span className={style} >
                {message}
            </span>
        }
        </>
    )

}

export default TextComponent
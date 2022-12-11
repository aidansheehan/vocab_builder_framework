import { FormattedMessage } from "react-intl"

/** TextComponent props */
type TextComponentPropsType = {

    /** Text Reference */
    textRef: string
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

    const { textRef } = props   //Destructure props

    return <FormattedMessage id={textRef} />

}

export default TextComponent
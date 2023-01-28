
/** TextValueComponentProps type */
type TextValueComponentProps = {

    /** Value to be displayed */
    value: string | number,

    /** Additional styles to be applied */
    style?: string

}

/**
 * Generic text component for strings or numbers that don't require translation
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let value = 'hello world!'
 * return (
 *   <TextValueComponent value={value} />
 * )
 */
const TextValueComponent = (props: TextValueComponentProps): JSX.Element => {

    const { value, style } = props  //Destructure props

    return <span className={style} >{value}</span>

}

export default TextValueComponent
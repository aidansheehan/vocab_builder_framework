import classNames from 'classnames'
import { ChangeEventHandler, Dispatch, HTMLInputTypeAttribute, MouseEventHandler, SetStateAction } from 'react'
//React Hook Form (Client Side Validation)
import { useForm } from 'react-hook-form'
import styles from './text-input.component.scss'

/** TextInputComponentProps */
type TextInputComponentProps = {

    /** Value */
    value: string | number,

    /** Set Value */
    setValue: Dispatch<SetStateAction<number | string>>,

    /** Function to execute on click */
    onClick?: MouseEventHandler<HTMLInputElement>,

    /** Whether text input disabled */
    disabled?: boolean,

    /** Placeholder text reference */
    placeholderRef?: string,

    /** Additional styles to be applied */
    style?: string,

    /** Whether input required */
    required?: boolean,

    /** Autocomplete */
    enableAutocomplete?: boolean,

    /** Input Type */
    type?: HTMLInputTypeAttribute

    /** Register type for form validation */
    validate?: 'email' | 'password'

}

/**
 * Generic text input component handling all validation and input sanitisation logic
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <TextInputComponent />
 * )
 */
const TextInputComponent = (props: TextInputComponentProps) => {

    const { value, setValue, onClick, disabled, style, type, enableAutocomplete, required, validate } = props  //Destructure props

    const { register } = useForm()

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e_) => {
        
        //Destructure event target
        const { value } = e_.target

        //Update value
        setValue(value)

    }

    const className = classNames(styles.textInput, style)

    //If validation property given use react hook form to validate input
    if (validate) {
        return (
            <input 
            className={className}
            type={type}
            value={value}
            onClick={onClick}
            disabled={disabled}
            onChange={handleChange}
            autoComplete={enableAutocomplete ? 'on' : 'off'}
            required={required}
            {...register(validate)}
    
        />
        )
    }

    return (
        <input 
            className={className}
            type={type}
            value={value}
            onClick={onClick}
            disabled={disabled}
            onChange={handleChange}
            autoComplete={enableAutocomplete ? 'on' : 'off'}
            required={required}
            
            
        />
    )

}

export default TextInputComponent
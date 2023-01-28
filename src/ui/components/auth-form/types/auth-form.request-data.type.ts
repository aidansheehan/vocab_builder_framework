/** AuthFormRequestData type */
export type AuthFormRequestData = {

    /** Type of Input */
    type: 'email' | 'password' | 'text',

    /** Register Validation Options TODO revisit after implementing input component */
    register: 'email' | 'password' | 'username' | 'passwordConfirm',

    /** Whether input data required */
    required?: boolean,

    /** Auto complete off or on */
    autoComplete: 'on' | 'off',

    /** Reference for localized placeholder text */
    placeholderReference: string
}
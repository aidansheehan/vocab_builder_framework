import { AuthFormRequestData } from '../../../types/auth-form.request-data.type'

/** Register Request Data Config */
export const REGISTER_REQUEST_DATA: AuthFormRequestData[] = [
    {
        type: 'text',
        register: 'username',
        required: true,
        autoComplete: 'off',
        placeholderReference: 'common_username_tag'
    },
    {
        type: 'email',
        register: 'email',
        required: true,
        autoComplete: 'off',
        placeholderReference: 'common_email_tag'
    },
    {
        type: 'password',
        register: 'password',
        required: true,
        autoComplete: 'off',
        placeholderReference: 'common_password_tag'
    },
    {
        type: 'password',
        register: 'passwordConfirm',
        required: true,
        autoComplete: 'off',
        placeholderReference: 'register_confirm_password_tag'
    }
]
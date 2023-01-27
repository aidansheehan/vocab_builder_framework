import { AuthFormRequestData } from '../../../types/auth-form.request-data.type'

/** Login Request Data Config */
export const LOGIN_REQUEST_DATA: AuthFormRequestData[] = [
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
    }
]
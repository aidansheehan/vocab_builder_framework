/** Login Response Type */
export type LoginResponseType = {

    /** Access Token (JWT) */
    accessToken: string,

    /** Users Email */
    email: string,

    /** User ID */
    id: number,

    /** User Roles TBD ['user'] | ['teacher'] | ['student'] or any combination of these - TODO this is currently sent as 'role' and is a string from backend */
    roles: Array<string>
    
    /** Username (for display, not unique) */
    username: string

}
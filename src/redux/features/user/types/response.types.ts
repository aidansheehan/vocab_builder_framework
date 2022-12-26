/** Login Response Type */
export type LoginResponseType = {

    /** Access Token (JWT) */
    accessToken: string,

    /** Users Email */
    email: string,

    /** User ID */
    id: string,

    /** User Roles TBD ['user'] | ['teacher'] | ['student'] or any combination of these - TODO this is currently sent as 'role' and is a string from backend */
    roles: Array<string>
    
    /** Username (for display, not unique) */
    username: string

}

/** getUserDetails response type */
export type UserDetailsResponseType = {

    /** Response successful */
    status: string,
    
    /** Data */
    data: {

        /** userinfo TODO should be UserInfoType from user types once finalised on backend VBF-37 */
        user: {

            /** Date user created */
            createdAt: string,

            /** User email */
            email: string,

            /** User role TODO see roles on LoginResponseType */
            role: string,

            /** Date last updated */
            updatedAt: string,

            /** Username */
            username: string,

            /** UserID */
            _id: string
        }
        createdAt: string,

    }
}
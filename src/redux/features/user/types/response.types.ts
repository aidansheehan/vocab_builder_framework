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
    status: number,
    
    /** Data */
    data: {

        status: string

        /** User data */
        data: {
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
        }

    }
}
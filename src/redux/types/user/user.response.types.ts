/** UserDetailsResponseType */
export type UserDetailsResponseType = {
    
    /** Date user created */
    createdAt: string,

    /** User email */
    email: string,

    /** User Roles TBD ['user'] | ['teacher'] | ['student'] or any combination of these - for now just returned as string with one role */
    role: string,

    /** Date last updated */
    updatedAt: string,

    /** Username */
    username: string,

    /** UserID */
    _id: string

}

/** LoginResponseType */
export type LoginResponseType = {
    
    /** JWT Access Token */
    accessToken: string

}

/** RegisterResponseType */
export type RegisterResponseType = LoginResponseType
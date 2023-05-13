/** User Info type */
export type UserInfoType = {

    /** User ID */
    _id: string,

    /** Username (for display, not unique) */
    username: string,

    /** User Email */
    email: string,

    /** User Roles TBD ['user'] | ['teacher'] | ['student'] or any combination of these - for now just returned as string with one role */
    role: string
    // roles: Array<string>
}

/** User Slice State Type */
export type UserType = {

    /** If loading */
    loading: boolean,

    /** User Info Object */
    userInfo: UserInfoType,

    /** JWT access token */
    accessToken: string,

    /** Error */
    error: any, //TBD

    /** Whether request successful */
    success: boolean,

    /** If logging out */
    loggingOut: boolean

}
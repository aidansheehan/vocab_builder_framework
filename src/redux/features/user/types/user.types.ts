/** User Info Type */
export type UserInfoType = {

    /** User ID */
    id: string,

    /** Username (for display, not unique) */
    username: string,

    /** User Email */
    email: string,

    /** User Roles TBD ['user'] | ['teacher'] | ['student'] or any combination of these */
    roles: Array<string>

}

/** User Slice State Type */
export type UserType = {

    /** If loading */
    loading: boolean,

    /** User Info Object */
    userInfo: UserInfoType,

    /** Error */
    error: any, //TBD

    /** Whether request successful */
    success: boolean

}
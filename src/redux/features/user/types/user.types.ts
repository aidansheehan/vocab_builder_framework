/** User Info Type */
export type UserInfoType = {

    /** User ID */
    id: number,

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

    /** User's Access Token (JWT) */
    userToken: string | null,

    /** Error */
    error: any, //TBD

    /** Whether request successful */
    success: boolean

}
/** UserLoginRequestType */
export type UserLoginRequestType = {

    /** User email */
    email: string,

    /** User password */
    password: string

}

/** RegisterUserRequestType */
export type RegisterUserRequestType = {

    /** New user's username */
    username: string,

    /** New user's email */
    email: string,

    /** New user's password */
    password: string,

    /** New user's password (confirm) */
    passwordConfirm: string

}
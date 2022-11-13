/** UserLoginRequestType */
export type UserLoginRequestType = {

    /** User's username TODO email? Must be unique */
    username: string,

    /** User's password */
    password: string

}

export type RegisterUserRequestType = {

    /** new user's username */
    username: string,

    /** new user's email */
    email: string,

    /** new user's password */
    password: string
}
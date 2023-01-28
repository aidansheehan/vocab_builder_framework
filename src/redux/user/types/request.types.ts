/** UserLoginRequestType */
export type UserLoginRequestType = {

    /** User email*/
    email: string,

    /** User's password */
    password: string

}

export type RegisterUserRequestType = {

    /** new user's username */
    username: string,

    /** new user's email */
    email: string,

    /** new user's password */
    password: string,

    /** new user's password (confirm) */
    passwordConfirm: string
}
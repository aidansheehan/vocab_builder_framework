//Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Actions
import { getUserDetails, registerUser, userLogin } from './user.actions'
//Types
import { LoginResponseType, UserDetailsResponseType }    from './types/response.types'
import { UserType }             from './types/user.types'

//Initialize userToken from localStorage TODO need to store somewhere better
const userToken = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null


/** Initial State */
const initialState: UserType = {
    loading: false,
    userInfo: null,
    userToken,    //for storing the JWT TODO remove? shouldn't be stored in redux as can be read in redux dev tools.
    error: null,
    success: false
}

/**
 * User Slice 🍕
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
            logout: (state) => {
                localStorage.removeItem('userToken') //Deletes token from storage
                state.loading       = false
                state.userInfo      = null
                state.userToken     = null
                state.error         = null
        },
    },
    extraReducers(builder) {

        /** Login User */
        //pending
        builder.addCase(userLogin.pending, (state) => {
            state.loading   = true
            state.error     = null
        })
        //fulfilled
        builder.addCase(userLogin.fulfilled, (state, { payload }: PayloadAction<LoginResponseType>) => {
            state.loading   = false
            state.userInfo  = { id: payload.id, username: payload.username, email: payload.email, roles: payload.roles }
            state.userToken = payload.accessToken
        })
        //rejected TODO type response once finalized from backend
        builder.addCase(userLogin.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading   = false
            state.error     = payload
        })

        /** Register User */
        //pending
        builder.addCase(registerUser.pending, (state) => {
            state.loading   = true
            state.error     = null
        })
        //fulfilled
        builder.addCase(registerUser.fulfilled, state => {
            state.loading = false
            state.success = true
        })
        //rejected TODO type response once finalized from backend
        builder.addCase(registerUser.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading   = false
            state.error     = payload
        })

        /** Get User Details */
        //pending
        builder.addCase(getUserDetails.pending, state => {
            state.loading = true
        })
        //fulfilled TODO decide what to return from backend and type response need to send user info on getUserDetails!
        builder.addCase(getUserDetails.fulfilled, (state, { payload }: PayloadAction<UserDetailsResponseType>) => {
            state.loading   = false

            const { user } = payload.data

            state.userInfo = {
                id: user._id,
                username: user.username,
                email: user.email,
                roles: [ user.role ],   //TODO type on backend and once returns non unique array this can be roles: user.roles
            }
            // state.userInfo  = payload
        })
        //rejected
        builder.addCase(getUserDetails.rejected, state => {
            state.loading = false
        })
    }

})

//Export actions
export const { logout } = userSlice.actions
export default userSlice.reducer
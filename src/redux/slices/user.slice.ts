//Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//Actions
import { getUserDetails, registerUser, userLogin } from '../actions/user.actions'
//Types
import { LoginResponseType, UserDetailsResponseType, RegisterResponseType } from '../types/user/user.response.types'
import { UserType }                                                         from '../types/user/user.types'

/** Initial State */
const initialState: UserType = {
    loading: false,
    userInfo: null,
    error: null,
    success: false,
    accessToken: null
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
                state.error         = null
                state.accessToken   = null
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

            state.loading       = false
            // state.success       = true
            state.accessToken   = payload.accessToken
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
        builder.addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<RegisterResponseType> ) => {
            state.loading = false
            // state.success = true
            state.accessToken = payload.accessToken
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
            state.userInfo  = payload
            state.success   = true

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
import { createSlice }                              from "@reduxjs/toolkit";
import { getUserDetails, registerUser, userLogin }  from "./user.actions";

//Initialize userToken from localStorage TODO need to store somewhere better
const userToken = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null

//TODO type properly
type UserType = {
    loading: boolean,
    userInfo: any,
    userToken: string | null,
    error: any,
    success: boolean
}

const initialState: UserType = {
    loading: false,
    userInfo: {},   //for user object
    userToken,    //for storing the JWT
    error: null,
    success: false
}

/** User Slice 🍕 */
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
            //@ts-ignore
            logout: (state) => {
                localStorage.removeItem('userToken') //Deletes token from storage
                state.loading       = false
                state.userInfo      = null
                state.userToken     = null
                state.error         = null
        },
    },
    extraReducers: {

        //Login user
        //@ts-ignore
        [userLogin.pending]: (state) => {
            state.loading   = true
            state.error     = null
        },
        //@ts-ignore
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading   = false
            state.userInfo  = payload           //TODO does this set userToken in two places?
            state.userToken = payload.userToken
        },
        //@ts-ignore
        [userLogin.rejected]: (state, { payload }) => {
            state.loading   = false
            state.error     = payload
        },

        //register user
        //@ts-ignore
        [registerUser.pending]: (state) => {

            state.loading   = true
            state.error     = null
       },
       //@ts-ignore
        [registerUser.fulfilled]: (state, { payload }) => {

            state.loading = false
            state.success = true    //Registration successful
        },
        //@ts-ignore
        [registerUser.rejected]: (state, { payload }) => {

            state.loading   = false
            state.error     = payload
        },

        //Get user details
        //@ts-ignore
        [getUserDetails.pending]: (state) => {
            state.loading = true
        },
        //@ts-ignore
        [getUserDetails.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
        },
        //@ts-ignore
        [getUserDetails.rejected]: (state, { payload }) => {
            state.loading = false
        },
    },
})

//Export actions
export const { logout } = userSlice.actions
export default userSlice.reducer
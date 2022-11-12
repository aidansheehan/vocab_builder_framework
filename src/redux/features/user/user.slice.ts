import { createSlice }              from "@reduxjs/toolkit";
import { registerUser, userLogin }  from "./user.actions";

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
    reducers: {},
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
        }
    },
})

export default userSlice.reducer
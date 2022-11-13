import { createSlice, PayloadAction }               from "@reduxjs/toolkit";
import { getUserDetails, registerUser, userLogin }  from "./user.actions";

//Initialize userToken from localStorage TODO need to store somewhere better
const userToken = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null

//TODO type properly
type UserType = {
    loading: boolean,
    userInfo: any,
    userToken: string | null,   //TODO can we remove and access from userInfo?
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

type LoginResponse = {
    accessToken: string,
    email: string,
    id: number,
    roles: Array<string>,
    username: string
}

/** User Slice 🍕 */
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
        builder.addCase(userLogin.fulfilled, (state, { payload }: PayloadAction<LoginResponse>) => {
            state.loading = false
            state.userInfo = payload            //ToDo does this set userToken in two places?
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
        //fulfilled TODO decide what to return from backend and type response
        builder.addCase(getUserDetails.fulfilled, (state, { payload }: PayloadAction<any>) => {
            console.log('get user deets fulfilled: ', payload)
            state.loading   = false
            state.userInfo  = payload
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
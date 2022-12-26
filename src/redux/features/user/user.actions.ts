import { createAsyncThunk } from '@reduxjs/toolkit'
// import { RootState } from '../../store'
import { RegisterUserRequestType, UserLoginRequestType } from './types/request.types'

const axios = require('axios')

/** registerUser action */
export const registerUser = createAsyncThunk(
    'user/register',
    async ( { username, email, password, passwordConfirm }: RegisterUserRequestType, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            //Make request to backend
            await axios.post(
                // '/api/user/register',
                'http://localhost:8000/api/auth/register',    //TODO configure proxy so don't need to hardcode this
                { username, email, password, passwordConfirm },
                config
            )
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
        }
    )

/** userLogin action */
export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }: UserLoginRequestType, { rejectWithValue }) => {
        try {
            //configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                // 'api/user/login',
                'http://localhost:8000/api/auth/login',
                { email, password },
                config
            )

            //Store user's token in local storage TODO need more secure place to store
            localStorage.setItem('userToken', data.accessToken)
            return data.user
        } catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** userRefresh action */
// export const userRefresh = createAsyncThunk(
//     'user/refresh',
//     async ( accessToken: string, { rejectWithValue }) => {
//         try {

//         } catch(error) {

//         }
//     }
// )

/** getUserDetails action (for accessing protected routes) */
//TODO can we access token from localStorage directly within this function? And remove from component logic?
export const getUserDetails = createAsyncThunk(

    'user/getUserDetails',

    async (userToken: string, { rejectWithValue }) => {

        try {

            //Configure authorization header with user's token
            const config = {
                headers: {
                    Authorization: `Bearer ${userToken}`
                    // 'x-access-token': user.userToken

                },
            }

            const { data } = await axios.get('http://localhost:8000/api/users/me', config)
            return data
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
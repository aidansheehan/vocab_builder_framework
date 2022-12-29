import { createAsyncThunk }                                 from '@reduxjs/toolkit'
import { RegisterUserRequestType, UserLoginRequestType }    from './types/request.types'
import PrivateHttpClient                                    from '../../../services/http-client/private-http-client.service'
import PublicHttpClient                                     from '../../../services/http-client/public-http-client.service'

/** registerUser action */
export const registerUser = createAsyncThunk(
    'user/register',
    async ( { username, email, password, passwordConfirm }: RegisterUserRequestType, { rejectWithValue }) => {
        try {
            //Make request to backend
            await PublicHttpClient.post(
                'auth/register',    //TODO configure proxy so don't need to hardcode this
                { username, email, password, passwordConfirm }
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

            const { data } = await PublicHttpClient.post(
                'auth/login',
                { email, password }
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

/** getUserDetails action (for accessing protected routes) */
export const getUserDetails = createAsyncThunk(

    'user/getUserDetails',

    async (_, { rejectWithValue }) => {

        try {

            const data = await PrivateHttpClient.get('users/me')

            return data.data
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
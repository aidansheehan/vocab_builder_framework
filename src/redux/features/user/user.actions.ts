import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { RegisterUserRequestType, UserLoginRequestType } from "./types/request.types";

const axios = require('axios')

/** registerUser action */
export const registerUser = createAsyncThunk(
    'user/register',
    async ( { username, email, password }: RegisterUserRequestType, { rejectWithValue }) => {
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
                'http://localhost:3000/api/auth/signup',    //TODO configure proxy so don't need to hardcode this
                { username, email, password },
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
    async ({ username, password }: UserLoginRequestType, { rejectWithValue }) => {
        try {
            //configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const { data } = await axios.post(
                // 'api/user/login',
                'http://localhost:3000/api/auth/signin',
                { username, password },
                config
            )

            //Store user's token in local storage TODO need more secure place to store
            localStorage.setItem('userToken', data.accessToken)
            return data
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

    //@ts-ignore TODO do we need callback for getUserDetails
    async (arg, { getState, rejectWithValue }) => {

        try {

            //Get user data from store
            const { user } = getState() as RootState

            //Configure authorization header with user's token
            const config = {
                headers: {
                    // Authorization: `Bearer ${user.userToken}`, TODO investigate bearer tokens
                    'x-access-token': user.userToken

                },
            }

            const { data } = await axios.get('http://localhost:3000/api/test/user', config)
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
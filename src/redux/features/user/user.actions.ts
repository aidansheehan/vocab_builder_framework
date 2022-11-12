import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const axios = require('axios')

export const registerUser = createAsyncThunk(
    'user/register',
    //@ts-ignore
    async ( { username, email, password }, { rejectWithValue }) => {
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

export const userLogin = createAsyncThunk(
    'user/login',
    //@ts-ignore
    async ({ username, password }, { rejectWithValue }) => {
        try {
            //configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            //@ts-ignore
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
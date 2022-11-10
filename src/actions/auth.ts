import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from './types'

import AuthService from '../services/auth.service'
import { Dispatch } from 'react';

/**
 * Creator for actions related to authentication
 * Use authService to make asynchronous HTTP requests which trigger one or more dispatch in the result
 */

/**
 * Function to call AuthService.register(username, email, password)
 * dispatch REGISTER_SUCCESS and SET_MESSAGE if successful
 * dispatch REGISTER_FAIL and SET_MESSAGE if failed
 */

//@ts-ignore TODO (dispatch)
export const register = (username: string, email: string, password: string) => (dispatch) => {
    
    return AuthService.register(username, email, password).then(

        //@ts-ignore TODO (response)
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS
            });

            return Promise.resolve();
        },
        (error: any) => {
            const message = (error.response && 
                                error.response.data && 
                                    error.response.data.message) || 
                            error.message || 
                            error.toString();

            dispatch({
                type: REGISTER_FAIL
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

/**
 * Function to call AuthService.login(username, password)
 * dispatch LOGIN_SUCCESS and SET_MESSAGE if successful
 * dispatch LOGIN_FAIL and SET_MESSAGE if failed
 */
export const login = (username: string, password: string) => (dispatch: Dispatch<any> ) => {

    return AuthService.login(username, password).then(
        
        (data: any) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error: any) => {
            const message = 
                (error.response &&
                    error.response.data &&
                        error.response.data.message) ||
                error.message ||
                error.toString();
            
            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

//Function to call AuthService.logout
export const logout = () => (dispatch: Dispatch<any>) => {

    AuthService.logout();

    dispatch({
        type: LOGOUT
    });
};
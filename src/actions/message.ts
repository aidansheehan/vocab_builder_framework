import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

/**
 * Redux action creator for actions related to messages (notifications) from APIs
 */

export const setMessage = (message: any) => ({
    type: SET_MESSAGE,
    payload: message,
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE,
})
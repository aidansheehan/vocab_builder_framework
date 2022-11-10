/**
 * Reducer to update state for set/clear message
 * @author Aidan Sheehan
 * @version 0.1.0
 */
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types"; 

const initialState = {}

//@ts-ignore TODO
const MessageReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case SET_MESSAGE:
            return { message: payload };
        
        case CLEAR_MESSAGE:
            return { message: "" };

        default:
            return state;
    }
}

export default MessageReducer
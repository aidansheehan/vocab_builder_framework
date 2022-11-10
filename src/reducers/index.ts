import { combineReducers }  from 'redux'
import auth                 from './auth'
import message              from './message'

/**
 * Combine reducers to single store
 */
export default combineReducers({
    auth,
    message
});
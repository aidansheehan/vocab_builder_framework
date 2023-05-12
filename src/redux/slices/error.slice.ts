import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ErrorStateType = {
    errorMessage: string,
    errorFlag: boolean
}

/** Initial State */
const initialState: ErrorStateType = {
    errorMessage: '',
    errorFlag: false
}

/**
 * Error slice 🍕
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action?: PayloadAction<string>) => {
            state.errorMessage  = action.payload ? action.payload : 'error-message_generic'     //Set error message
            state.errorFlag     = true                                                          //Set error flag true
        },
        clearError: (state) => {
            state.errorMessage  = ''        //Clear error message
            state.errorFlag     = false     //Clear error flag
        }
    }
})

//Export actions
export const { setError, clearError } = errorSlice.actions
export default errorSlice.reducer
import { configureStore }   from '@reduxjs/toolkit'
import userReducer          from './features/user/user.slice'

/**
 * App Store
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const store = configureStore({
    reducer: {
        user: userReducer
    },
    devTools: true //TODO set false for prod
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState   = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
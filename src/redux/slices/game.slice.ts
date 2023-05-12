import { createSlice } from "@reduxjs/toolkit"

type GameSliceType = {
    waitingToStart: boolean
}

/** Initial State */
const initialState: GameSliceType = {
    waitingToStart: true
}

/**
 * Game Slice 🍕
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        gameInitialised: (state) => {
            state.waitingToStart = true
        },
        gameStarted: (state) => {
            state.waitingToStart = false
        }
    }
})

//Export actions
export const { gameStarted, gameInitialised } = gameSlice.actions
export default gameSlice.reducer
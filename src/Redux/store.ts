import { configureStore } from "@reduxjs/toolkit";
import combinedReducers from "./Slices/combinedReducers";

export const store = configureStore ({
    reducer:combinedReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
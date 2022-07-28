import { createSlice, configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./features/cakeSlice";
import userReducer from "./features/userSlice";

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});


export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: {
        reducer: counterSlice,
        cake: cakeReducer,
        user: userReducer
    },
});

export default store;
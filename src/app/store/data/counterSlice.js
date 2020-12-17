import {createSlice} from "@reduxjs/toolkit";

export const counterReducerName = 'counter';

// default state
const initialState = {
  value: 0,
  someValue: undefined,
}

// slice
const counterSlice = createSlice({
  name: counterReducerName,
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    }
  }
})

// // selectors
const getCounter = state => state[counterReducerName];
export const getCounterValue = state => getCounter(state).value;

export const { increment, decrement } = counterSlice.actions
export const counterReducer = counterSlice.reducer


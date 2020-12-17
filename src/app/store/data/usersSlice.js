import {createSlice} from "@reduxjs/toolkit";

export const name = 'users';

// default state
const initialState = {
  data: null,
  status: 'IDLE', // enum
}

// slice
const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    loading(state) {
      state.status = 'LOADING';
    },
    setData(state, action) {
      state.status = 'LOADED';
      state.data = action.payload;
    }
  }
})

// // selectors
const getUsers = state => state[name];
export const getUsersData = state => getUsers(state).data;
export const getUsersStatus = state => getUsers(state).status;

export const { loading, setData } = userSlice.actions
export const usersReducer = userSlice.reducer


import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from '../model/user';
import { initialState } from './user-init';
import { findAllUsers, finduserById } from './user-service';

const articleThunks = [findAllUsers]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)

}

const handlePending = (state: any) => {
  
}
const handleRejected = (state: any) => {
  
}

export const userlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllUsers.fulfilled, handleFulfilled)
        .addCase(finduserById.fulfilled, handleFulfilled)
  
    }
})
export const getAlluser = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array;
}

export const getUserById = (state: any) => (state.user.array)


export const {} = userlice.actions

export default userlice.reducer;
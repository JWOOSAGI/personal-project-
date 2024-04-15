import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from '../model/user';
import { initialState } from './user-init';
import { findAllUsers, findUserById, loginUser } from './user-service';

const articleThunks = [findAllUsers]

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}, //내부 연산
    extraReducers: builder => { //자바연동
        const { pending, rejected } = status; //진행중, 거부

        builder
            .addCase(findAllUsers.fulfilled, (state: any, {payload}: any) => {state.array=payload})
            .addCase(findUserById.fulfilled, (state: any, { payload }: any) => { state.array = payload;})
            .addCase(loginUser.fulfilled, (state: any, { payload }: any) => {state.message = payload;})
    },
})
export const getAlluser = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array;
}

export const getUserById = (state: any) => (state.user.array)
export const getUser = (state: any) => (state.user.array)
export const getMessage = (state: any) => (state.user.message)


export const { } = userSlice.actions

export default userSlice.reducer;
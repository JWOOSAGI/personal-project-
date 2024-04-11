import { createAsyncThunk } from "@reduxjs/toolkit";

import { findAllUsersAPI, finduserByIdAPI } from "./user-api";

export const findAllUsers: any = createAsyncThunk(
    'users/findAllUsers',
    async (page: number)=>{
        console.log('findAllUsers page : '+ page)
        const data:any = await  findAllUsersAPI(1);

        const {message, result}:any = data
        console.log('----- API 를 사용한 경우 -----')
        console.log('message : '+ message)
        console.log(JSON.stringify(result))
        return data
    }
)

export const finduserById: any = createAsyncThunk(
    'users/detail',
    async (id: number)=>{
        console.log('findAllUsers page : '+ id)
        const data:any = await  finduserByIdAPI(id);
        // const {message, result}:any = data
        return data
    }
)


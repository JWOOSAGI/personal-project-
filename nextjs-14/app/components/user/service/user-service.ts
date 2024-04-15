import { createAsyncThunk } from "@reduxjs/toolkit";

import { findAllUsersAPI, findUserByIdAPI, loginUserAPI} from "./user-api";
import { IUser } from "../model/user";

export const findAllUsers: any = createAsyncThunk(
    'users/findAllUsers',
    async (page: number)=>{
        console.log('findAllUsers page : '+ page)
        const data:any = await  findAllUsersAPI(1);
        const {message, result}:any = data
        return data
    }
)

export const findUserById: any = createAsyncThunk(
    'user/findUserById',
    async (id: number) => {
        return await findUserByIdAPI(id)
    }
)

export const loginUser: any = createAsyncThunk(
    'users/login',
    async (user: IUser) => await loginUserAPI(user)
)


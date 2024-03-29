import { createSlice } from "@reduxjs/toolkit"

interface IUser {
    id : number
    username : string,
    psw : string,
    pswrepeat : string,
    phone : string,
    job : string,
}

const initialState:IUser = {
    id : 0,
    username : '',
    psw : '',
    pswrepeat : '',
    phone : '',
    job : '',
}

export const userSlice = createSlice({
})
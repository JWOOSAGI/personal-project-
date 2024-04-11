'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { finduserById } from "@/app/components/user/service/user-service";
import { getUserById } from "@/app/components/user/service/user-slice";
import { IUser } from "@/app/components/user/model/user";
// import React from "react";

export default function UserDetailPage (props:any) {
    const dispatch = useDispatch(); //setter
    const user:IUser = useSelector(getUserById) //getter

    useEffect(() => { //dispatch를 먼저 실행하기위해 useEffect(즉시실행함수)사용
        dispatch(finduserById(props.params.id))
    }, [])

    return (<>
    
    {props.params.id}번 사용자 상세정보<br />
    <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    <span>아이디</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{user.username}</Typography>
    <span>비밀번호</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{user.password}</Typography>
    <span>이름</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{user.name}</Typography>
    <span>전화번호</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{user.phone}</Typography>
    <span>직업</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{user.job}</Typography>
    </>)

}



'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { NextPage } from "next";
// import React from "react";

export default function BoardDetailPage (props:any) {

    useEffect(() => {
        dispatch(findBoardById(props.params.id))
    }, [])

    return (<>
    
    게시판 상세
    <span>ID</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {props.params.id}</Typography>
    <span>게시판이름</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
    <span>게시판타입</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}></Typography>
    <span>등록일</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
    <span>수정일</span> <Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
    </>)

}
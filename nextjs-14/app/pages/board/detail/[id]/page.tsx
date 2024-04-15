'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { IBoard } from "@/app/components/board/model/board";
import { useSelector } from "react-redux";
import { findBoardById } from "@/app/components/board/service/board-service";
import { getBoardById } from "@/app/components/board/service/board-slice";
// import React from "react";

export default function BoardDetailPage (props:any) {

    const dispatch = useDispatch();
    const board:IBoard = useSelector(getBoardById)

    useEffect(() => {
        dispatch(findBoardById(props.params.id))},[])

        const handleDeleteClick = () => {
            console.log('삭제 버튼 클릭')
        }
        const handleEditClick = () => {
            console.log('삭제 버튼 클릭')
        }

    return (<>
    {props.params.id}번 게시판 상세<br />
    <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    <span> 게시판 이름 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.boardName}</Typography>
    <span> 게시판 타입 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.boardType}</Typography>
    <span> 등록일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}>{board.regDate}</Typography>
    <span> 수정일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.modDate}</Typography>
    
    <Button variant="outlined" onClick={handleEditClick}>수정</Button>
    <Button variant="outlined" onClick={handleDeleteClick}>삭제</Button>
    </>)
    
}
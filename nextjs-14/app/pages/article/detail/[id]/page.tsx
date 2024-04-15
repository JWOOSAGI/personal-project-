'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { getArticleById } from "@/app/components/article/service/article-slice";
import { findArticleById } from "@/app/components/article/service/article-service";
import { IArticle } from "@/app/components/article/model/article";
// import React from "react";

export default function ArticleDetailPage (props:any){
    
    const dispatch = useDispatch();
    const article:IArticle = useSelector(getArticleById)

    useEffect(()=>{
        dispatch(findArticleById(props.params.id))},[])

        const handleDeleteClick = () => {
            console.log('삭제 버튼 클릭')
        }
        const handleEditClick = () => {
            console.log('삭제 버튼 클릭')
        }
   

    return (<>
    {props.params.id}번 게시글 상세<br />
    <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    {article && (<>
    <span> 제목 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {article.title}</Typography>
    <span> 내용 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {article.content}</Typography>
    <span> 등록일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}>{article.regDate}</Typography>
    <input type="button" />
    </>
    )}
    <Button variant="outlined" onClick={handleEditClick}>수정</Button>
    <Button variant="outlined" onClick={handleDeleteClick}>삭제</Button>
    </>)
}
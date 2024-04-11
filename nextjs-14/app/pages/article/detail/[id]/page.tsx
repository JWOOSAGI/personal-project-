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
// import React from "react";

export default function ArticleDetailPage ({params}:any){

    const dispatch = useDispatch();
    const article = useSelector(getArticleById)

    useEffect(()=>{
        dispatch(findArticleById(params.id))},[])

    return(<>
        <h3>{params.id}의 상세페이지</h3>
    </>)

}
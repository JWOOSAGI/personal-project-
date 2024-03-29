'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import AxiosConfig from "@/redux/common/configs/axios-config";
import { API } from "@/redux/common/enums/API";
import { NextPage } from "next";
import { useSelector, useDispatch } from 'react-redux'
import { getAllArticles } from "@/redux/features/articles/article.service";
// import React from "react";

interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const Articles:NextPage=() =>{
    const dispatch = useDispatch();
    const router = useRouter();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        dispatch(getAllArticles())
    }, [])
    
    return (<>
        <h2>Article</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>registerDate</th>
                </tr>
            </thead>
            <tbody>
                {articles.map((props: IArticle) => (
                    <tr key={props.id}>
                        <td>{props.title}</td>
                        <td>{props.content}</td>
                        <td>{props.writer}</td>
                        <td>{props.registerDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}

export default Articles;

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}

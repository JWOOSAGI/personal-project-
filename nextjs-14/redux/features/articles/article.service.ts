import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "./article.model";
import { getAllArticlesAPI } from "./article.api";
import axios from "axios";
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config";
import { API } from "@/redux/common/enums/API";

export const getAllArticles: any = createAsyncThunk(
    'articles/getAllArticles',
    (page: number, { rejectWithValue }) => {
        console.log('getArticles page : ' + page)
        const {message, result} : any = getAllArticlesAPI(1);
        console.log('----- API를 사용한 경우 -----')
        console.log('message : '+ message)
        console.log(JSON.stringify(result))
    }
)
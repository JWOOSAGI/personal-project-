'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button, Input } from "@mui/material";
import AxiosConfig from "@/app/components/common/configs/axios-config"
import { API } from "@/app/components/common/enums/API"
import { NextPage } from "next"

const SERVER = 'http://localhost:8080'
const Login:NextPage = () => {
    const [userName, setUserName] = useState('')
    const [PW, setPW] = useState('')
    const handleUserName = (e: any) => {
        setUserName(e.target.value)
    }
    const handlePW = (e: any) => {
        setPW(e.target.value)
    }
    const router = useRouter();
    const handleSubmit = () => {
        alert(userName + PW)
        axios.post(`${API.SERVER}/login`, { userName, PW }, AxiosConfig())
            .then(res => {
                const message = res.data.message
                alert((message))
                if (message == null){
                    alert("FAIL");
                } else if(message === 'SUCCESS'){
                    //alert("SUCCESS");
                    router.push("/articles")
                } else if(message === 'WRONG_PASSWORD'){
                    alert("WRONG_PASSWORD");
                } else{
                    alert("지정되지 않은 값");
                }
                
            })
    }
    return (<div className="text-center">
        <div className="text-3xl font-bold underline" >ID와 PW를 입력하세요.</div>
        <h2>Login</h2>
        <h3>ID</h3>
        <Input type="text" placeholder="Enter ID" onChange={handleUserName} />
        <h3>PW</h3>
        <Input type="text" placeholder="Enter Password" onChange={handlePW} /><br /><br />
        <label><input type="checkbox"checked={true} name="remember"style={{ marginBottom: 15 }} /> Remember me</label><br />
        <Button onClick={handleSubmit}>로그인</Button><br />
        <Link href={"/"}> 홈</Link><br />
    </div>)
}
export default Login;
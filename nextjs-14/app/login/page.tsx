'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SERVER = 'http://localhost:8080'
export default function Login() {
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
        const url = `${SERVER}/api/login`
        const data = { userName: userName, PW:PW } //key and value가 같으면 생략가능(이건 생략안한거)
        const config = {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~`,
                "Access-Control-Allow-Origin": "*",
            }
        }
        axios.post(url, data, config)
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
    return (<>
        <div>ID와 PW를 입력하세요.</div>
        <h2>Login</h2>
        <h3>ID</h3>
        <input type="text" onChange={handleUserName} />
        <h3>PW</h3>
        <input type="text" onChange={handlePW} />
        <br /><br />
        <button onClick={handleSubmit}>로그인</button><br />
        <Link href={"/"}> 홈</Link><br />
    </>)
}
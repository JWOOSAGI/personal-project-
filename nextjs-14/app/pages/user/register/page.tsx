'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AxiosConfig from "@/app/components/common/configs/axios-config"
import { Button, Input } from "@mui/material"
import { API } from "@/app/components/common/enums/API"
import { NextPage } from "next"
const SERVER = 'http://localhost:8080'

const Join:NextPage = () =>{
  const [username, setUserName] = useState('')
  const handleUserName = (e: any) => {
    setUserName(e.target.value)
  }
  const [psw, setpsw] = useState('')
  const handlePsw = (e: any) => {
    setpsw(e.target.value)
  }
  const [name, setName] = useState('')
  const handleName = (e: any) => {
    setName(e.target.value)
  }
  const [phone, setPhone] = useState('')
  const handlePhone = (e: any) => {
    setPhone(e.target.value)
  }
  const [job, setJob] = useState('')
  const handleJob = (e: any) => {
    setJob(e.target.value)
  }
  
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDeafult()
    alert('리퀘스트가 가져가는 정보 : ' + username + psw + name + phone + job )
    
    axios.post(`${API.SERVER}/users`, { username, psw, name, phone, job }, AxiosConfig()) 
      .then(res => {
        alert("리스폰스가 가져온 이름 : " + JSON.stringify(res.data))
        router.push("/login")
      }
      )
  }
  return (<div className="text-center">
    <div >
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="username"><b>ID</b><br /></label>
      <Input onChange={handleUserName}type="text" placeholder="Enter ID" name="email" required /><br /><br />

      <label htmlFor="psw"><b>Password</b><br /></label>
      <Input onChange={handlePsw}type="password"placeholder="Enter Password"name="psw" required /><br /><br />

      <label htmlFor="name"><b>Name</b><br /></label>
      <Input onChange={handleName}type="text"placeholder="Enter Name"name="name" required /><br /><br />

      <label htmlFor="phone"><b>Phone Number</b><br /></label>
      <Input onChange={handlePhone}type="text"placeholder="Enter Phone Number"name="phone" required /><br /><br />

      <label htmlFor="job"><b>Job</b><br /></label>
      <Input onChange={handleJob}type="text"placeholder="Enter Job"name="job" required /><br /><br />
      
      <label><input type="checkbox"checked={true} name="remember"style={{ marginBottom: 15 }} /> Remember me</label>
      <div className="clearfix">
        <Button type="button" className="cancelbtn">Cancel</Button>
        <Button onClick={handleSubmit} type="submit" className="signupbtn">Sign Up</Button>
      </div>
      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
      
    </div>
  </div>)
}

export default Join;
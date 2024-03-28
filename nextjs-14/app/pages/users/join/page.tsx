'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import AxiosConfig from "@/app/organisms/configs/axios-config"
import { API } from "@/app/atmos/enums/API"
import { Button, Input } from "@mui/material"
const SERVER = 'http://localhost:8080'

export default function Join() {
  const [username, setUserName] = useState('')
  const handleUserName = (e: any) => {
    setUserName(e.target.value)
  }
  const [psw, setpsw] = useState('')
  const handlePsw = (e: any) => {
    setpsw(e.target.value)
  }
  const [pswrepeat, setPswRepeat] = useState('')
  const handlePswRepeat = (e: any) => {
    setPswRepeat(e.target.value)
  }
  const [phone, setPhone] = useState('')
  const handlePhone = (e: any) => {
    setPhone(e.target.value)
  }
  const [job, setJob] = useState('')
  const handleJob = (e: any) => {
    setJob(e.target.value)
  }
  const [height, setHeight] = useState('')
  const handleHeight = (e: any) => {
    setHeight(e.target.value)
  }
  const [weight, setWeight] = useState('')
  const handleWeight = (e: any) => {
    setWeight(e.target.value)
  }
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDeafult()
    alert('리퀘스트가 가져가는 정보 : ' + username + psw + pswrepeat + phone + job + height + weight)
    
    axios.post(`${API.SERVER}/users`, { username, psw, pswrepeat,phone, job, height, weight }, AxiosConfig()) 
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

      <label htmlFor="psw-repeat"><b>Repeat Password</b><br /></label>
      <Input onChange={handlePswRepeat}type="password"placeholder="Enter Repeat Password"name="psw-repeat" required /><br /><br />

      <label htmlFor="phone"><b>Phone Number</b><br /></label>
      <Input onChange={handlePhone}type="text"placeholder="Enter Phone Number"name="phone" required /><br /><br />

      <label htmlFor="job"><b>Job</b><br /></label>
      <Input onChange={handleJob}type="text"placeholder="Enter Job"name="job" required /><br /><br />

      <label htmlFor="height"><b>Height</b><br /></label>
      <Input onChange={handleHeight}type="text"placeholder="Enter Height"name="height" required /><br /><br />

      <label htmlFor="weight"><b>Weight</b><br /></label>
      <Input onChange={handleWeight}type="text"placeholder="Enter Weight"name="weight" required /><br /><br />
      
      <label><input type="checkbox"checked={true} name="remember"style={{ marginBottom: 15 }} /> Remember me</label>
      <div className="clearfix">
        <Button type="button" className="cancelbtn">Cancel</Button>
        <Button onClick={handleSubmit} type="submit" className="signupbtn">Sign Up</Button>
      </div>
      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
      
    </div>
  </div>)
}
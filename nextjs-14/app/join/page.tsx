'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
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

  const handleSubmit = () => {
    alert('리퀘스트가 가져가는 정보 : ' + username + psw + pswrepeat + phone + job + height + weight)
    const url = `${SERVER}/api/users`
    const data = { username, psw, pswrepeat,phone, job, height, weight }
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
        alert("리스폰스가 가져온 이름 : " + JSON.stringify(res.data))
        router.push("/login")
      }
      )
  }
  return (<>
    <div className="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />
      <label htmlFor="username"><b>ID</b><br /></label>
      <input onChange={handleUserName}type="text" placeholder="Enter ID" name="email" required /><br /><br />

      <label htmlFor="psw"><b>Password</b><br /></label>
      <input onChange={handlePsw}type="password"placeholder="Enter Password"name="psw" required /><br /><br />

      <label htmlFor="psw-repeat"><b>Repeat Password</b><br /></label>
      <input onChange={handlePswRepeat}type="password"placeholder="Enter Repeat Password"name="psw-repeat" required /><br /><br />

      <label htmlFor="phone"><b>Phone Number</b><br /></label>
      <input onChange={handlePhone}type="text"placeholder="Enter Phone Number"name="phone" required /><br /><br />

      <label htmlFor="job"><b>Job</b><br /></label>
      <input onChange={handleJob}type="text"placeholder="Enter Job"name="job" required /><br /><br />

      <label htmlFor="height"><b>Height</b><br /></label>
      <input onChange={handleHeight}type="text"placeholder="Enter Height"name="height" required /><br /><br />

      <label htmlFor="weight"><b>Weight</b><br /></label>
      <input onChange={handleWeight}type="text"placeholder="Enter Weight"name="weight" required /><br /><br />
      
      <label><input type="checkbox"checked={true} name="remember"style={{ marginBottom: 15 }} /> Remember me</label>

      <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button onClick={handleSubmit} type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </>)
}
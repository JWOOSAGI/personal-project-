'use client'


export default function Join(){
    return(<>
    <div>환영합니다.</div>
    <h2>회원가입</h2>
    <h3>아이디 입력</h3>
    <input type="text" onChange={handleUserName}/>
    <h3>비밀번호 입력</h3>
    <input type="text" onChange={handlePW}/>
    <h3></h3>
    </>)
}
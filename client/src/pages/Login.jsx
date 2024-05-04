import React from 'react'
import "../css/Login.css"
import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [user , setUser] = useState({email: "" , password: ""});

  const handleLogin = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post('' , user);
      console.log(res.data);

    } catch (error) {
      console.log(error)
    }
  }

  return (
   <div className="container">
  <div className="login-container">
    <h1>Login</h1>
    <form onSubmit={handleLogin} action="#" className="form-login">
      <div className="textfield">
        <label className='label' htmlFor="email"> E-mail</label>
        <input className='input' type="email" name="usuario" placeholder="E-mail" onChange={e=>setUser({...user , email:e.target.value})} />
      </div>
      <div className="textfield">
        <label className='label' htmlFor="senha"> password</label>  
        <input className='input' type="password" name="email" placeholder="email" onChange={e=>setUser({...user , password:e.target.value})} />
      </div>
      {/* <a className="forgot-password" href="#"></a> */}
      <button type='submit' className="btn-login">Login </button>
    </form>
    <div>
    </div></div></div>

  )
}

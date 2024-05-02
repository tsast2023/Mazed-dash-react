import React from 'react'
import "../css/Login.css"
export default function Login() {
  return (
   <div className="container ">
  <div className="login-container">
    <h1>Login</h1>
    <form action="#" className="form-login">
      <div className="textfield">
        <label className='label' htmlFor="email"> E-mail</label>
        <input className='input' type="email" name="usuario" placeholder="E-mail" />
      </div>
      <div className="textfield">
        <label className='label' htmlFor="senha"> Senha</label>
        <input className='input' type="password" name="senha" placeholder="Senha" />
      </div>
      <a className="forgot-password" href="#">Esqueceu sua senha?</a>
      <button className="btn-login">Login </button>
    </form>
    <div>
    </div></div></div>

  )
}

import React from 'react';
import "../css/Login.css";
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('', user);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center"> {/* Center the left part */}
        {/* Left Part */}
        <div className="col-lg-6 col-md-12">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </form>
          </div>
        </div>
        {/* Right Part */}
        <div className="col-lg-6 d-none d-lg-block">
          <div className="login-image">
            <img src="./Mazed.jpg" alt="Login" />
          </div>
        </div>
      </div>
    </div>
  );
}

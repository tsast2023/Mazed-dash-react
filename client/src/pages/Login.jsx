import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 login-container">
          <div className="card-log">
            <div className="card-body">
              <h3 className="card-title">Bienvenue</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 image-container">
          <img src="./Mazed.jpg" alt="login" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Login;

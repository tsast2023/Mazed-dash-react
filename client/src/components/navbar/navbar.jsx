import React from 'react';
import './navbar.css';

const Navbar = ({ username }) => {
    return (
      <div className="navbar">
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
        </div>
        <div className="user-profile">
            <img src="./logo192.png" alt="User" className="user-image" title={`Hello, ${username}`} />
        </div>
      </div>
    );
  }

export default Navbar;

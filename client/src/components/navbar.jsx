import React, { useState } from 'react';
import '../css/navbar.css';

const Navbar = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="notification-icon" onClick={handleMenuToggle}>
        <i className="fas fa-bell"></i>
      </div>
      <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Your notification content goes here */}
        <div className="notification-content">
          {/* Notification items */}
          <div className="notification-item">
            <div className="user-avatar">
              <img src="./logo192.png" alt="User" className="avatar-image" />
            </div>
            <div className="notification-details">
              <div className="notification-message">
                <span className="user-name">John Doe</span> liked your post
              </div>
              <div className="notification-time">2 hours ago</div>
            </div>
          </div>
          <div className="notification-item">
            <div className="user-avatar">
              <img src="./logo192.png" alt="User" className="avatar-image" />
            </div>
            <div className="notification-details">
              <div className="notification-message">
                <span className="user-name">Jane Smith</span> commented on your photo
              </div>
              <div className="notification-time">1 day ago</div>
            </div>
          </div>
        </div>
        <div className="close-button" onClick={handleMenuToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="user-profile">
        <img src="./user.png" alt="User" className="user-image" title={`Hello, ${username}`} />
      </div>
    </div>
  );
};

export default Navbar;

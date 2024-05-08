import React, { useState } from "react";
import "../css/navbar.css";

const Navbar = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleNotificationToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageToggle = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="icons-right">
          <div className="settings-icon" onClick={handleLanguageToggle}>
            <i className="fas fa-cog"></i>
          </div>
          <div className="notification-icon" onClick={handleNotificationToggle}>
            <i className="fas fa-bell"></i>
          </div>
          <div className="profile-icon">
            <img src="./logo192.png" alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>

      {/* Notification Menu */}
      <div
        className={`notification-menu ${isMenuOpen ? "open" : ""}`}
        style={{ position: "absolute", right: 0 }}
      >
        {/* Existing notification items */}
        <div className="close-button" onClick={handleNotificationToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>

      {/* Language Change Menu */}
      <div
        className={`notification-menu ${isLangMenuOpen ? "open" : ""}`}
        style={{ position: "absolute", right: 0, top: "50px" }}
      >
        <div className="notification-content">
          <div className="notification-item" onClick={() => alert('Language set to English')}>
            English
          </div>
          <div className="notification-item" onClick={() => alert('Langue définie sur Français')}>
            Français
          </div>
          <div className="notification-item" onClick={() => alert('تم تعيين اللغة إلى العربية')}>
            العربية
          </div>
        </div>
        <div className="close-button" onClick={handleLanguageToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

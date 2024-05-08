import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import "../css/navbar.css";

const Navbar = ({ username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

  const handleNotificationToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageToggle = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const handleSettingsToggle = () => {
    setIsSettingsMenuOpen(!isSettingsMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="icons-right">
          <div className="settings-icon" onClick={handleSettingsToggle}>
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
      <div
        className={`notification-menu ${isMenuOpen ? "open" : ""}`}
        style={{ position: "absolute", right: 0 }}
      >
        <div className="close-button" onClick={handleNotificationToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div
        className={`notification-menu ${isLangMenuOpen ? "open" : ""}`}
        style={{ position: "absolute", right: 0, top: "50px" }}
      >
        <div className="notification-content">
          <div className="notification-item" onClick={() => alert('Language set to English')}>English</div>
          <div className="notification-item" onClick={() => alert('Langue définie sur Français')}>Français</div>
          <div className="notification-item" onClick={() => alert('تم تعيين اللغة إلى العربية')}>العربية</div>
        </div>
        <div className="close-button" onClick={handleLanguageToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>

      <div
        className={`notification-menu ${isSettingsMenuOpen ? "open" : ""}`}
      >
        <div className="notification-content">
          <div className="notification-item">
            <Link to="/Profile">
            <i className="fas fa-user-circle me-2"></i> Profile
            </Link>
          </div>
          <div className="notification-item">
            <Link to ="/Messagerie">
            <i className="fa-solid fa-comments me-2"></i> Messagerie
            </Link>
          </div>
          <div className="notification-item" onClick={handleLanguageToggle}>
            <i className="fas fa-globe me-2"></i> Languages
          </div>
          <div className="notification-item">
            <i className="fas fa-sign-out-alt me-2"></i> Déconnexion
          </div>
        </div>
        <div className="close-button" onClick={handleSettingsToggle}>
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

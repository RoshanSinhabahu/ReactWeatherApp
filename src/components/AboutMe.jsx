import React from 'react';
// Import icons for the modal
import { FiX, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';

// The 'onClose' prop is a function that will be passed from App.jsx to close the modal
const AboutMe = ({ onClose }) => {
  return (
    // The modal-overlay provides the dark, clickable background
    <div className="modal-overlay" onClick={onClose}>
      {/* The modal-card itself, with glassmorphism styles */}
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="close-button" onClick={onClose}>
          <FiX size={20} />
        </button>

        {/* Profile content */}
        <div className="profile-content">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQE_ixbpFmR73Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718300773852?e=1756944000&v=beta&t=_9pPgUyWQgXLy7ilW7mhiU4KbAhsCTdKC4oJsTnvx8I" // A placeholder image, you can replace this URL
            alt="Developer portrait" 
            className="profile-image"
          />
          <h2 className="profile-name">Roshan</h2>
          <p className="profile-title">Front-End Developer</p>
          <p className="profile-bio">
            I'm a developer passionate about creating dynamic and beautiful web applications.
          </p>
        </div>

        {/* Social media links */}
        <div className="social-links">
          <p className="connect-text">connect with me</p>
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/roshansinhabahu/" target="_blank" className="social-icon"><FiLinkedin /></a>
            <a href="https://github.com/RoshanSinhabahu" target="_blank" className="social-icon"><FiGithub /></a>
            <a href="https://www.facebook.com/RoshanSinhabahu" target="_blank" className="social-icon"><FiFacebook /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from 'react';

const HighlightCard = ({ icon, title, children }) => {
  return (
    <div className="highlight-card">
      <div className="title-container">
        <span className="icon">{icon}</span>
        <span>{title}</span>
      </div>
      <div className="highlight-content">
        {children}
      </div>
    </div>
  );
};

export default HighlightCard;

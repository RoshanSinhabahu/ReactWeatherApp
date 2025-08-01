import React from 'react';

const HighlightCard = ({ icon, title, value, unit, description }) => {
  return (
    <div className="highlight-card">
      <div className="title-container">
        <span className="icon">{icon}</span>
        <span>{title}</span>
      </div>
      <div className="value">
        {value} <span className="unit">{unit}</span>
      </div>
      {description && <p className="description">{description}</p>}
    </div>
  );
};
export default HighlightCard;
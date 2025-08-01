import React from 'react';

// The 'value', 'unit', and 'description' props are replaced by a single 'children' prop
const HighlightCard = ({ icon, title, children }) => {
  return (
    <div className="highlight-card">
      <div className="title-container">
        <span className="icon">{icon}</span>
        <span>{title}</span>
      </div>
      {/* The children passed from the parent component will be rendered here */}
      <div className="highlight-content">
        {children}
      </div>
    </div>
  );
};

export default HighlightCard;

import React from 'react';

const AdviceCard = ({ icon, text }) => {
  return (
    <div className="advice-card">
      <div className="icon-container">{icon}</div>
      <p className="text">{text}</p>
    </div>
  );
};
export default AdviceCard;
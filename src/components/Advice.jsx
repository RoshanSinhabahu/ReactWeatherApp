import React from 'react';
import AdviceCard from './AdviceCard';
import { FiSun, FiUmbrella } from 'react-icons/fi';
import { WiThermometer } from 'react-icons/wi';

const Advice = ({ rainChance, temperature }) => {
  return (
    // The title can be changed to be more specific if you like
    <div>
      <h2 className="advice-title">What to Wear & Bring</h2>
      
      {/* This grid will now stack the cards vertically */}
      <div className="advice-grid">
        <AdviceCard 
          icon={<FiUmbrella size={24} />} 
          text={rainChance > 50 ? "Bring an umbrella" : "No umbrella needed"} 
        />
        <AdviceCard 
          icon={<WiThermometer size={24} />} 
          text={temperature < 20 ? "A light jacket is a good idea" : "Jacket not required"} 
        />
      </div>
    </div>
  );
};

export default Advice;

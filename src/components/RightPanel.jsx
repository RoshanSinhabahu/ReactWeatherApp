import React from 'react';
import Forecast from './Forecast';
import Highlights from './Highlights';
import Advice from './Advice';

const RightPanel = ({ forecast, highlights, rainChance, temperature, unit, setUnit, formatTemperature }) => {
  return (
    <div className="right-panel">
      {/* The forecast stays at the top */}
      <Forecast 
        forecastData={forecast} 
        unit={unit} 
        setUnit={setUnit} 
        formatTemperature={formatTemperature} 
      />
      
      {/* New container for the bottom sections to sit side-by-side */}
      <div className="bottom-content-container">
        <Highlights highlightsData={highlights} />
        <Advice rainChance={rainChance} temperature={temperature} />
      </div>
    </div>
  );
};

export default RightPanel;

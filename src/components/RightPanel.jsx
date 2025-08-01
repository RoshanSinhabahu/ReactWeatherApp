import React from 'react';
import Forecast from './Forecast';
import Highlights from './Highlights';
import Advice from './Advice';

// unit and setUnit props have been removed from here
const RightPanel = ({ forecast, highlights, rainChance, temperature, formatTemperature }) => {
  return (
    <div className="right-panel">
      <Forecast 
        // unit and setUnit are no longer passed to Forecast
        forecastData={forecast} 
        formatTemperature={formatTemperature} 
      />
      
      <Highlights highlightsData={highlights} />

      <Advice 
        rainChance={rainChance}
        temperature={temperature}
      />
    </div>
  );
};

export default RightPanel;

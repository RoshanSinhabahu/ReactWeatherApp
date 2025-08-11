import React from 'react';
import Forecast from './Forecast';
import Highlights from './Highlights';
import Advice from './Advice';

const RightPanel = ({ forecast, highlights, rainChance, temperature, formatTemperature }) => {
  return (
    <div className="right-panel">
      <Forecast 
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

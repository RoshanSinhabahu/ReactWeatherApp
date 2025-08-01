import React from 'react';
import WeatherIcon from './WeatherIcon';

// unit and setUnit props have been removed from here
const Forecast = ({ forecastData, formatTemperature }) => {
  return (
    // The main container no longer needs to justify-between
    <div className="forecast-container">
      <div className="forecast-grid">
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-card">
            <p className="day">{day.day}</p>
            <div className="icon">
              <WeatherIcon iconName={day.icon} />
            </div>
            <p className="temp">{formatTemperature(day.high)}/{formatTemperature(day.low)}</p>
          </div>
        ))}
      </div>
      {/* The unit-toggle div has been completely removed from this component */}
    </div>
  );
};

export default Forecast;

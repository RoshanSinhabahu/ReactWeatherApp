import React from 'react';
import WeatherIcon from './WeatherIcon';

const Forecast = ({ forecastData, unit, setUnit, formatTemperature }) => {
  return (
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
      <div className="unit-toggle">
        <button onClick={() => setUnit('C')} className={unit === 'C' ? 'active' : ''}>°C</button>
        <button onClick={() => setUnit('F')} className={unit === 'F' ? 'active' : ''}>°F</button>
      </div>
    </div>
  );
};
export default Forecast;
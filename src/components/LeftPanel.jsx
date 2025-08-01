import React from 'react';
import { WiDaySunny, WiDayCloudy } from 'react-icons/wi';

const LeftPanel = ({ weatherData, formatTemperature }) => {
  return (
    <div className="left-panel">
      <div className="location-info">
        <h2 className="location-name">{weatherData.location}</h2>
        <p className="location-date">{weatherData.date}</p>
      </div>
      <div className="current-weather">
        <div className="weather-icon-container">
          <WiDaySunny className="weather-icon-main" />
          <WiDayCloudy className="weather-icon-overlay" />
        </div>
        <h1 className="temperature">{formatTemperature(weatherData.temperature)}</h1>
        <p className="condition">{weatherData.condition}</p>
      </div>
      <div className="extra-details">
        <p>Feels Like: {formatTemperature(weatherData.feels_like)}</p>
        <p>Chance of Rain: {weatherData.rain_chance}%</p>
      </div>
    </div>
  );
};
export default LeftPanel;
import React from 'react';
import WeatherIcon from './WeatherIcon';

const LeftPanel = ({ weatherData, formatTemperature }) => {
  return (
    <div className="left-panel">
      <div className="location-info">
        <h2 className="location-name">{weatherData.location.city}</h2>
        <p className="location-country">{weatherData.location.country}</p>
        <p className="location-date">{weatherData.date}</p>
      </div>
      
      <div className="current-weather">
        <div className="weather-icon-container">
          <WeatherIcon 
            iconName={weatherData.conditionIcon} 
            className="weather-icon-main" 
          />
        </div>
        <h1 className="temperature">
          {formatTemperature(weatherData.temperature)}
        </h1>
        <p className="condition">{weatherData.condition}</p>
      </div>

      <div className="extra-details">
        <p className="extra-details-text">Feels Like: {formatTemperature(weatherData.feels_like)}</p>
        <p className="extra-details-text">Chance of Rain: {weatherData.rain_chance}%</p>
      </div>
    </div>
  );
};

export default LeftPanel;

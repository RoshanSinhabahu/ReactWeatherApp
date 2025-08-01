import React from 'react';
// 1. Import our custom WeatherIcon component
import WeatherIcon from './WeatherIcon';

// This component receives "props" from App.jsx.
const LeftPanel = ({ weatherData, formatTemperature }) => {
  return (
    <div className="left-panel">
      
      {/* Top section with Location */}
      <div className="location-info">
        <h2 className="location-name">{weatherData.location.city}</h2>
        <p className="location-country">{weatherData.location.country}</p>
        <p className="location-date">{weatherData.date}</p>
      </div>
      
      {/* Middle section with current weather */}
      <div className="current-weather">
        <div className="weather-icon-container">
          {/* 2. THE FIX: 
            We replace the hardcoded icons with our dynamic WeatherIcon component.
            It will now correctly show the icon based on the data from App.jsx.
          */}
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

      {/* Bottom section with extra details */}
      <div className="extra-details">
        <p className="extra-details-text">Feels Like: {formatTemperature(weatherData.feels_like)}</p>
        <p className="extra-details-text">Chance of Rain: {weatherData.rain_chance}%</p>
      </div>
    </div>
  );
};

export default LeftPanel;

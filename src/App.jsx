import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SearchBar from './components/SearchBar';
import WeatherEffects from './components/WeatherEffects';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({
    location: 'Vavuniya, Sri Lanka',
    temperature: 29,
    condition: 'Partly Cloudy',
    conditionIcon: 'Thunderstorm',
    date: 'Thursday, 31 July 2025',
    feels_like: 34,
    rain_chance: 40,
    forecast: [
        { day: 'Thu', icon: 'PartlyCloudy', high: 31, low: 26 },
        { day: 'Fri', icon: 'Sunny', high: 32, low: 26 },
        { day: 'Sat', icon: 'Rainy', high: 29, low: 25 },
        { day: 'Sun', icon: 'Rainy', high: 28, low: 25 },
        { day: 'Mon', icon: 'Sunny', high: 32, low: 26 },
        { day: 'Tue', icon: 'PartlyCloudy', high: 31, low: 26 },
        { day: 'Wed', icon: 'Cloudy', high: 30, low: 25 },
    ],
    highlights: {
      uv: 8,
      wind: 14,
      humidity: 78,
      visibility: 9,
      air_quality: 48,
    },
  });

  const [unit, setUnit] = useState('C');

  const formatTemperature = (tempC) => {
    if (unit === 'C') return `${tempC}°`;
    return `${Math.round((tempC * 9) / 5 + 32)}°`;
  };

  return (
    <div className="app-container">
      <WeatherEffects condition={weatherData.conditionIcon} />
      <main className="main-frame">
        <div className="search-container">
          <SearchBar />
        </div>
        <div className="content-panels">
          <LeftPanel weatherData={weatherData} formatTemperature={formatTemperature} />
          <RightPanel
            forecast={weatherData.forecast}
            highlights={weatherData.highlights}
            rainChance={weatherData.rain_chance}
            temperature={weatherData.temperature}
            unit={unit}
            setUnit={setUnit}
            formatTemperature={formatTemperature}
          />
        </div>
      </main>
    </div>
  );
}
export default App;
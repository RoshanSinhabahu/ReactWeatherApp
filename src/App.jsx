import React, { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SearchBar from './components/SearchBar';
import WeatherEffects from './components/WeatherEffects';
import AboutMe from './components/AboutMe'; // 1. Import the new component
import { FiInfo } from 'react-icons/fi';
import './App.css';
import './effects.css'; // <-- ADD THIS LINE TO IMPORT THE EFFECTS

function App() {
  const [weatherData, setWeatherData] = useState({
    location: {
      city: 'Nuwara Eliya',
      country: 'Sri Lanka',
    },
    temperature: 18,
    condition: 'Thunderstorm',
    conditionIcon: 'Thunderstorm',
    date: 'Friday, 01 August 2025',
    feels_like: 16,
    rain_chance: 65,
    forecast: [
        { day: 'Fri', icon: 'PartlyCloudy', high: 31, low: 26 },
        { day: 'Sat', icon: 'Sunny', high: 32, low: 26 },
        { day: 'Sun', icon: 'Rainy', high: 29, low: 25 },
        { day: 'Mon', icon: 'Rainy', high: 28, low: 25 },
        { day: 'Tue', icon: 'Sunny', high: 32, low: 26 },
        { day: 'Wed', icon: 'PartlyCloudy', high: 31, low: 26 },
        { day: 'Thu', icon: 'Cloudy', high: 30, low: 25 },
    ],
    highlights: {
      uv: 8,
      wind: 14,
      humidity: 78,
      visibility: 9,
      air_quality: 48,
      sunrise: '6:05 AM',
      sunset: '6:28 PM',
    },
  });

  const [unit, setUnit] = useState('C');

  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const formatTemperature = (tempC) => {
    if (unit === 'C') return `${tempC}°`;
    return `${Math.round((tempC * 9) / 5 + 32)}°`;
  };

  const getBackgroundColorClass = () => {
    const condition = weatherData.conditionIcon;
    const hour = 10;
    const isDay = hour > 6 && hour < 18;

    if (condition === 'Thunderstorm') {
      return 'storm-gradient';
    }
    if (condition === 'Cloudy' || condition === 'PartlyCloudy' || condition === 'Haze') {
      return 'cloudy-gradient';
    }
    if (isDay) {
      return 'day-gradient';
    } else {
      return 'night-gradient';
    }
  };

  return (
    <div className={`app-container ${getBackgroundColorClass()}`}>
      <WeatherEffects condition={weatherData.conditionIcon} />
      <main className="main-frame">
        <div className="top-bar">
          <div className="search-wrapper">
            <SearchBar />
          </div>
          <div className="unit-toggle">
            <button onClick={() => setUnit('C')} className={unit === 'C' ? 'active' : ''}>°C</button>
            <button onClick={() => setUnit('F')} className={unit === 'F' ? 'active' : ''}>°F</button>
          </div>
        </div>
        <div className="content-panels">
          <LeftPanel weatherData={weatherData} formatTemperature={formatTemperature} />
          <RightPanel
            forecast={weatherData.forecast}
            highlights={weatherData.highlights}
            rainChance={weatherData.rain_chance}
            temperature={weatherData.temperature}
            formatTemperature={formatTemperature}
          />
        </div>
      </main>
      <button className="floating-info-button" onClick={() => setIsAboutMeOpen(true)}>
        <FiInfo size={24} />
      </button>
      {isAboutMeOpen && <AboutMe onClose={() => setIsAboutMeOpen(false)} />}
    </div>
  );
}

export default App;

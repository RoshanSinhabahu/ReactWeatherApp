import React, { useState, useEffect } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import SearchBar from './components/SearchBar';
import WeatherEffects from './components/WeatherEffects';
import AboutMe from './components/AboutMe';
import { FiInfo } from 'react-icons/fi';
import './App.css';
import './effects.css';

const mapApiConditionToEffect = (apiCondition) => {
  const condition = apiCondition.toLowerCase();
  if (condition.includes('thunderstorm')) return 'Thunderstorm';
  if (condition.includes('drizzle')) return 'Drizzle';
  if (condition.includes('rain')) return 'Rainy';
  if (condition.includes('snow')) return 'Snowy';
  if (condition.includes('clear')) return 'Clear';
  if (condition.includes('clouds')) return 'Cloudy';
  if (condition.includes('mist') || condition.includes('fog')) return 'Foggy';
  if (condition.includes('haze')) return 'Haze';
  return 'Clear';
};

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('C');
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [city, setCity] = useState('Colombo');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setError(null);
      setWeatherData(null);
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const [currentWeatherResponse, forecastResponse] = await Promise.all([
          fetch(currentWeatherUrl),
          fetch(forecastUrl)
        ]);

        if (!currentWeatherResponse.ok || !forecastResponse.ok) {
          throw new Error('City not found. Please try again.');
        }

        const currentData = await currentWeatherResponse.json();
        const forecastData = await forecastResponse.json();

        const dailyForecasts = {};
        forecastData.list.forEach(item => {
          const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
          if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
              temps: [],
              icons: [],
            };
          }
          dailyForecasts[date].temps.push(item.main.temp);
          if (new Date(item.dt * 1000).getHours() === 13) {
            dailyForecasts[date].icons.push(item.weather[0].main);
          }
        });

        const formattedForecast = Object.keys(dailyForecasts).slice(0, 7).map(day => {
          const dayData = dailyForecasts[day];
          return {
            day: day,
            icon: mapApiConditionToEffect(dayData.icons[0] || 'Clear'),
            high: Math.round(Math.max(...dayData.temps)),
            low: Math.round(Math.min(...dayData.temps)),
          };
        });

        const formattedData = {
          location: {
            city: currentData.name,
            country: currentData.sys.country,
          },
          temperature: Math.round(currentData.main.temp),
          condition: currentData.weather[0].main,
          conditionIcon: mapApiConditionToEffect(currentData.weather[0].main),
          date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          feels_like: Math.round(currentData.main.feels_like),
          rain_chance: forecastData.list[0].pop * 100,
          forecast: formattedForecast,
          highlights: {
            uv: 'N/A',
            wind: currentData.wind.speed,
            humidity: currentData.main.humidity,
            visibility: currentData.visibility / 1000,
            air_quality: 'N/A',
            sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          },
        };
        setWeatherData(formattedData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setError(error.message);
      }
    };

    fetchWeatherData();
  }, [city]);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  const formatTemperature = (tempC) => {
    if (unit === 'C') return `${tempC}°`;
    return `${Math.round((tempC * 9) / 5 + 32)}°`;
  };

  const getBackgroundColorClass = () => {
    if (!weatherData) return 'night-gradient';
    const condition = weatherData.conditionIcon;
    const hour = new Date().getHours();
    const isDay = hour > 6 && hour < 19;

    if (condition === 'Thunderstorm') return 'storm-gradient';
    if (condition === 'Haze') return isDay ? 'haze-gradient' : 'haze-gradient-night';
    if (['Cloudy', 'Rainy', 'Drizzle', 'Mist', 'Foggy'].includes(condition)) return 'cloudy-gradient';
    if (isDay) return 'day-gradient';
    return 'night-gradient';
  };

  if (!weatherData) {
    return (
      <div className="app-container night-gradient">
        <div className="loading-message">
          {error ? error : 'Fetching Live Weather Data...'}
        </div>
      </div>
    );
  }

  return (
    <div className={`app-container ${getBackgroundColorClass()}`}>
      <WeatherEffects condition={weatherData.conditionIcon} />
      <main className="main-frame">
        <div className="top-bar">
          <div className="search-wrapper">
            <SearchBar onSearch={handleSearch} />
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

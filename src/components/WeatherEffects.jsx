import React from 'react';
import { FaCloud, FaStar, FaRegSnowflake } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs';
const FogLayer = ({ style }) => <div className="effect-fog-layer" style={style} />;

const RainDrop = ({ style }) => <div className="effect-raindrop" style={style} />;
const Cloud = ({ style }) => <div className="effect-cloud" style={style}><FaCloud /></div>;
const Star = ({ style }) => <div className="effect-star" style={style}><FaStar /></div>;
const Snowflake = ({ style }) => <div className="effect-snowflake" style={style}><FaRegSnowflake /></div>;
const Lightning = ({ style }) => <div className="effect-lightning" style={style} />;
const Sunbeam = ({ style }) => <div className="effect-sunbeam" style={style} />;
const FogParticle = ({ style }) => <div className="effect-fog" style={style} />;
const HazeParticle = ({ style }) => <div className="effect-haze" style={style} />;
const HailStone = ({ style }) => <div className="effect-hailstone" style={style}><BsCircleFill /></div>;

const WeatherEffects = ({ condition }) => {
  const effects = {
    Sunny: (
      <>
        <Sunbeam style={{ animationDelay: '-2s' }} />
        <Sunbeam style={{ animationDelay: '-4s' }} />
      </>
    ),
    Rainy: Array.from({ length: 150 }).map((_, i) => (
      <RainDrop key={i} style={{ 
        left: `${Math.random() * 100}%`, 
        animationDelay: `${Math.random() * 1.5}s`, 
        animationDuration: `${0.4 + Math.random() * 0.6}s` 
      }} />
    )),
    Thunderstorm: (
      <>
        {Array.from({ length: 150 }).map((_, i) => (
          <RainDrop key={`rain-${i}`} style={{ 
            left: `${Math.random() * 100}%`, 
            animationDelay: `${Math.random() * 1.5}s`, 
            animationDuration: `${0.4 + Math.random() * 0.2}s` 
          }} />
        ))}
        <Lightning style={{ animationDelay: '0s' }} />
        <Lightning style={{ animationDelay: '3s' }} />
        <Lightning style={{ animationDelay: '5.5s' }} />
      </>
    ),
    Cloudy: Array.from({ length: 15 }).map((_, i) => (
      <Cloud key={i} style={{ 
        top: `${Math.random() * 80}%`, 
        left: `-20%`, 
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${10 + Math.random() * 15}s` 
      }} />
    )),
    PartlyCloudy: Array.from({ length: 7 }).map((_, i) => (
        <Cloud key={i} style={{ 
          top: `${Math.random() * 70}%`, 
          left: `-20%`, 
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${10 + Math.random() * 15}s` 
        }} />
    )),
    Clear: Array.from({ length: 150 }).map((_, i) => (
      <Star key={i} style={{ 
        top: `${Math.random() * 100}%`, 
        left: `${Math.random() * 100}%`, 
        animationDelay: `${Math.random() * 8}s` 
      }} />
    )),
    Snowy: Array.from({ length: 100 }).map((_, i) => (
        <Snowflake key={i} style={{ 
          left: `${Math.random() * 100}%`, 
          animationDelay: `${Math.random() * 10}s`, 
          animationDuration: `${5 + Math.random() * 5}s` 
        }} />
    )),
    Foggy: (
      <>
        <FogLayer style={{ top: '50%', animationDuration: '40s', animationDelay: '0s' }} />
        <FogLayer style={{ top: '60%', animationDuration: '35s', animationDelay: '-5s' }} />
        <FogLayer style={{ top: '70%', animationDuration: '45s', animationDelay: '-10s' }} />
      </>
    ),
    Haze: Array.from({ length: 25 }).map((_, i) => (
      <HazeParticle key={i} style={{ top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 15}s`, animationDuration: `${30 + Math.random() * 20}s` }} />
    )),
    Hail: Array.from({ length: 100 }).map((_, i) => (
      <HailStone key={i} style={{ left: `${Math.random() * 200}%`, animationDelay: `${Math.random() * 2}s`, animationDuration: `${0.3 + Math.random() * 5}s` }} />
    )),
  };

  return (
    <div className="weather-effects-container">
      {effects[condition] || null}
    </div>
  );
};

export default WeatherEffects;

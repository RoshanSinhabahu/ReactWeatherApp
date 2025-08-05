import React from 'react';
import { 
  WiDaySunny, 
  WiDayCloudy, 
  WiRain, 
  WiCloudy, 
  WiThunderstorm, 
  WiFog, 
  WiDayHaze, 
  WiHail 
} from 'react-icons/wi';

const WeatherIcon = ({ iconName, ...props }) => {
  switch (iconName) {
    case 'Sunny': return <WiDaySunny {...props} />;
    case 'PartlyCloudy': return <WiDayCloudy {...props} />;
    case 'Rainy': return <WiRain {...props} />;
    case 'Cloudy': return <WiCloudy {...props} />;
    case 'Thunderstorm': return <WiThunderstorm {...props} />;
    case 'Foggy': return <WiFog {...props} />;
    case 'Haze': return <WiDayHaze {...props} />;
    case 'Hail': return <WiHail {...props} />;
    default: return <WiDaySunny {...props} />;
  }
};
export default WeatherIcon;
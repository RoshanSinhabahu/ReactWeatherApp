import React from 'react';
import { WiDaySunny, WiDayCloudy, WiRain, WiCloudy, WiThunderstorm } from 'react-icons/wi';

const WeatherIcon = ({ iconName, ...props }) => {
  switch (iconName) {
    case 'Sunny': return <WiDaySunny {...props} />;
    case 'PartlyCloudy': return <WiDayCloudy {...props} />;
    case 'Rainy': return <WiRain {...props} />;
    case 'Cloudy': return <WiCloudy {...props} />;
    case 'Thunderstorm': return <WiThunderstorm {...props} />;
    default: return <WiDaySunny {...props} />;
  }
};
export default WeatherIcon;
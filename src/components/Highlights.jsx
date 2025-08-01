import React from 'react';
import HighlightCard from './HighlightCard';
import { WiStrongWind, WiHumidity, WiSunrise } from 'react-icons/wi';
import { FiSun, FiEye } from 'react-icons/fi';

const Highlights = ({ highlightsData }) => {
  return (
    <div>
      <h2 className="highlights-title">Today's Highlights</h2>
      <div className="highlights-grid">
        <HighlightCard icon={<FiSun size={20} />} title="UV Index" value={highlightsData.uv} />
        <HighlightCard icon={<WiStrongWind size={20} />} title="Wind Status" value={highlightsData.wind} unit="km/h" />
        <HighlightCard icon={<WiHumidity size={20} />} title="Humidity" value={highlightsData.humidity} unit="%" description={highlightsData.humidity > 70 ? "High humidity" : "Comfortable"} />
        <HighlightCard icon={<FiEye size={20} />} title="Visibility" value={highlightsData.visibility} unit="km" />
        <HighlightCard icon={<WiSunrise size={20} />} title="Air Quality" value={highlightsData.air_quality} description={highlightsData.air_quality > 50 ? "Moderate" : "Good"} />
      </div>
    </div>
  );
};
export default Highlights;

import React from 'react';
import HighlightCard from './HighlightCard';
import { WiStrongWind, WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi';
import { FiSun, FiEye } from 'react-icons/fi';

const Highlights = ({ highlightsData }) => {
  return (
    <div className="highlights-container">
      <h2 className="highlights-title">What mood is above us?</h2>
      <div className="highlights-grid">
        <HighlightCard icon={<FiSun size={20} />} title="UV Index">
          <div className="value">{highlightsData.uv}</div>
        </HighlightCard>

        <HighlightCard icon={<WiStrongWind size={20} />} title="Wind Status">
          <div className="value">
            {highlightsData.wind} <span className="unit">km/h</span>
          </div>
        </HighlightCard>

        <HighlightCard icon={<WiSunrise size={20} />} title="Sunrise & Sunset">
          <div className="sunrise-sunset-container">
            <div className="time-row">
              <WiSunrise size={24} className="time-icon" />
              <span>{highlightsData.sunrise}</span>
            </div>
            <div className="time-row">
              <WiSunset size={24} className="time-icon" />
              <span>{highlightsData.sunset}</span>
            </div>
          </div>
        </HighlightCard>
        
        <HighlightCard icon={<WiHumidity size={20} />} title="Humidity">
          <div className="value">
            {highlightsData.humidity} <span className="unit">%</span>
          </div>
          <p className="description">
            {highlightsData.humidity > 70 ? "High humidity" : "Comfortable"}
          </p>
        </HighlightCard>
        
        <HighlightCard icon={<FiEye size={20} />} title="Visibility">
          <div className="value">
            {highlightsData.visibility} <span className="unit">km</span>
          </div>
        </HighlightCard>
        
        <HighlightCard icon={<FiSun size={20} />} title="Air Quality">
          <div className="value">{highlightsData.air_quality}</div>
          <p className="description">
            {highlightsData.air_quality > 50 ? "Moderate" : "Good"}
          </p>
        </HighlightCard>
      </div>
    </div>
  );
};

export default Highlights;

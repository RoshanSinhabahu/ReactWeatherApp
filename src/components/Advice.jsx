import React from 'react';
import { LuUmbrella, LuUmbrellaOff } from 'react-icons/lu';

// This component now generates a single string of advice
const Advice = ({ rainChance, temperature }) => {

  const getAdviceText = () => {
    const wearJacket = temperature < 20;
    const bringUmbrella = rainChance > 50;

    if (wearJacket && bringUmbrella) {
      return "Wear a jacket and bring an umbrella.";
    }
    if (wearJacket && !bringUmbrella) {
      return "Wear a jacket, no umbrella needed.";
    }
    if (!wearJacket && bringUmbrella) {
      return "Bring an umbrella, no jacket needed.";
    }
    return "No umbrella. No jacket. Just vibes. Looks like a great day!";
  };

  // This variable is used to decide which icon to show
  const bringUmbrella = rainChance > 50;

  return (
    <div className="advice-tile">
      <div className="advice-icon-container">
        {/* --- THIS IS THE MODIFIED PART --- */}
        {/* It checks the 'bringUmbrella' variable and shows the correct icon */}
        {bringUmbrella ? (
          <LuUmbrella size={24} />
        ) : (
          <LuUmbrellaOff size={24} />
        )}
      </div>
      <p className="advice-text">{getAdviceText()}</p>
    </div>
  );
};

export default Advice;
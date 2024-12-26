import React from 'react';
import CharacterCard from './CharacterCard';

const TierRow = ({ tier, characters }) => {
  return (
    <div className="tier-row">
      <h2 className="tier-title">{tier}</h2>
      <div className="tier-characters">
        {characters.map((char, index) => (
          <CharacterCard
            key={index}
            image={char.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TierRow;

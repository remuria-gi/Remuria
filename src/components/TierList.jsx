import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import characterData from '../chartier.json';
import '../styles.css';

const TierList = () => {
  const [tierData, setTierData] = useState([]);

  useEffect(() => {
    setTierData(characterData);
    // Clean up event listener on component unmount
  }, []); // Empty dependency array to ensure this runs once after mount

  return (
    <div>
      <h2 className='tier-list-heading'>Tier List</h2>
      <p className='tier-list-subheading'>Genshin Impact 5.1 Tier List
        </p>
      {/* Bootstrap Accordion for Tier List Overview */}
      <div className="accordion" id="tierListAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button bg-success text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Tier List Overview
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#tierListAccordion"
            style={{ backgroundColor: '#f2f2f2' }}
          >
            <div className="accordion-body">
              <p style={{ margin:'8px', padding:'2px' }}>About the tier list: This tier list ranks characters based on their abilities, stats, and other factors...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tier List Grid Section with dynamic scale */}
      <div className={'tier-list-grid'}>
        <div className="grid-header"></div>
        <div className="grid-header main-dps-header">MAIN DPS</div>
        <div className="grid-header sub-dps-header">SUB DPS</div>
        <div className="grid-header amplifiers-header">SUPPORT</div>
        <div className="grid-header sustain-header">SUSTAIN</div>

        {/* Tier rows */}
        {tierData.map((tier, index) => (
          <React.Fragment key={index}>
            <div className={`grid-tier tier-heading tier-${tier.tier.replace('.', '_')}`}>{tier.tier}</div>

            <div className="grid-cell main-dps">
              {tier.mainDPS.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} overlay={character.overlay} />
              ))}
            </div>

            <div className="grid-cell sub-dps">
              {tier.subDPS.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} overlay={character.overlay}/>
              ))}
            </div>

            <div className="grid-cell amplifiers">
              {tier.amplifiers.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} overlay={character.overlay}/>
              ))}
            </div>

            <div className="grid-cell sustain">
              {tier.sustain.map((character, charIndex) => (
                <CharacterCard key={charIndex} image={character.image} tags={character.tags} overlay={character.overlay}/>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TierList;

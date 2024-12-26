import React, { useState } from 'react';
import CharListCard from './CharListCard'; // Keep this file name as provided
import characterData from '../characters.json';
import '../styles.css';

const Characters = ({ isCollapsed }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');
  const [elementFilter, setElementFilter] = useState('all');
  const [weaponFilter, setWeaponFilter] = useState('all');

  // Function to reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setRarityFilter('all');
    setElementFilter('all');
    setWeaponFilter('all');
  };

  // Function to handle search and filter
  const filteredCharacters = characterData.filter((character) => {
    const charname = character.charname || '';
    const matchesSearch = charname.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === 'all' || character.rarity === rarityFilter;
    const matchesElement = elementFilter === 'all' || character.element === elementFilter;
    const matchesWeapon = weaponFilter === 'all' || character.weapon === weaponFilter;

    return matchesSearch && matchesRarity && matchesElement && matchesWeapon;
  });

  return (
    <div className="characters-container">
    <h2 className='char-heading'>Genshin Impact Characters</h2>
    <p className='char-subheading'>A comprehensive list of all current playable Genshin Impact characters</p>
      <div className={`filters-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`search-bar ${isCollapsed ? 'collapsed' : 'expanded'}`}
          style={{
            width: isCollapsed ? '60%' : '100%', // Inline style for dynamic width change
          }}
        />
        
        {/* Rarity Filter */}
        <div className="filter-box">
          <div className="filter-options">
            <div onClick={() => setRarityFilter('all')} className={`filter-option ${rarityFilter === 'all' ? 'active' : ''}`}>*</div>
            <div onClick={() => setRarityFilter('4*')} className={`filter-option ${rarityFilter === '4*' ? 'active' : ''}`} style={{ color: 'violet' }}>4★</div>
            <div onClick={() => setRarityFilter('5*')} className={`filter-option ${rarityFilter === '5*' ? 'active' : ''}`} style={{ color: 'gold' }}>5★</div>
          </div>
        </div>

        {/* Element Filter */}
        <div className="filter-box">
          <div className="filter-options">
            <div onClick={() => setElementFilter('all')} className={`filter-option ${elementFilter === 'all' ? 'active' : ''}`}>*</div>
            <div onClick={() => setElementFilter('Pyro')} className={`filter-option ${elementFilter === 'Pyro' ? 'active' : ''}`}>
              <img src="./images/elements/Pyro.png" alt="Pyro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Hydro')} className={`filter-option ${elementFilter === 'Hydro' ? 'active' : ''}`}>
              <img src="./images/elements/Hydro.png" alt="Hydro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Electro')} className={`filter-option ${elementFilter === 'Electro' ? 'active' : ''}`}>
              <img src="./images/elements/Electro.png" alt="Electro" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Geo')} className={`filter-option ${elementFilter === 'Geo' ? 'active' : ''}`}>
              <img src="./images/elements/Geo.png" alt="Geo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Anemo')} className={`filter-option ${elementFilter === 'Anemo' ? 'active' : ''}`}>
              <img src="./images/elements/Anemo.png" alt="Anemo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Cryo')} className={`filter-option ${elementFilter === 'Cryo' ? 'active' : ''}`}>
              <img src="./images/elements/Cryo.png" alt="Cryo" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setElementFilter('Dendro')} className={`filter-option ${elementFilter === 'Dendro' ? 'active' : ''}`}>
              <img src="./images/elements/Dendro.png" alt="Dendro" style={{ width: '20px', height: 'auto' }} />
            </div>
          </div>
        </div>

        {/* Weapon Filter */}
        <div className={`filter-box ${isCollapsed ? 'collapsed' : ''}`}>
          <div className={`filter-options ${isCollapsed ? 'collapsed' : ''}`}>
            <div onClick={() => setWeaponFilter('all')} className={`filter-option ${weaponFilter === 'all' ? 'active' : ''}`}>*</div>
            <div onClick={() => setWeaponFilter('Claymore')} className={`filter-option ${weaponFilter === 'Claymore' ? 'active' : ''}`}>
              <img src="./images/weapons/claymore.png" alt="Claymore" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Sword')} className={`filter-option ${weaponFilter === 'Sword' ? 'active' : ''}`}>
              <img src="./images/weapons/sword.png" alt="Sword" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Catalyst')} className={`filter-option ${weaponFilter === 'Catalyst' ? 'active' : ''}`}>
              <img src="./images/weapons/catalyst.png" alt="Catalyst" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Bow')} className={`filter-option ${weaponFilter === 'Bow' ? 'active' : ''}`}>
              <img src="./images/weapons/bow.png" alt="Bow" style={{ width: '20px', height: 'auto' }} />
            </div>
            <div onClick={() => setWeaponFilter('Polearm')} className={`filter-option ${weaponFilter === 'Polearm' ? 'active' : ''}`}>
              <img src="./images/weapons/polearm.png" alt="Polearm" style={{ width: '20px', height: 'auto' }} />
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button onClick={resetFilters} className={`reset-button ${isCollapsed ? 'collapsed' : ''}`}>
          {isCollapsed ? 'Reset' : 'Reset'}
        </button>
      </div>

      {/* Character List */}
      <div className={`character-list ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      {filteredCharacters.map((character, index) => (
      <CharListCard
        key={index}
        image={character.image}
        charname={character.charname}
        isCollapsed={isCollapsed} // Pass isCollapsed prop to the card
        style={{ width: isCollapsed ? '60px' : '100px', height: isCollapsed ? '60px' : 'auto' }} // Adjust size based on isCollapsed
      />
      ))}
    </div>
    </div>
  );
};

export default Characters;

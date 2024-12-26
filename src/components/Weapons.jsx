import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../styles.css';

const Weapons = ({ isCollapsed }) => {
  const [weaponsData, setWeaponsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');

  useEffect(() => {
    Papa.parse('/data/weapons.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const filteredData = result.data.map(({ image, name, quality, base_atk, substat, passive }) => {
          // Clean up the image URL to strip everything after .png
          const cleanImageUrl = image.split('.png')[0] + '.png';
          
          return {
            Image: cleanImageUrl.trim(),  // Ensure the URL ends with .png
            Name: name,
            Quality: quality,
            Base_ATK: base_atk,
            Substat: substat,
            Passive: passive,
          };
        });
        setWeaponsData(filteredData);
        setIsLoading(false);
      },
      error: (error) => {
        console.error('Error reading CSV file', error);
        setIsLoading(false);
      },
    });
  }, []);
  
  

  const getQualityColor = (quality) => {
    switch (quality) {
      case "5 Stars":
        return "gold";
      case "4 Stars":
        return "#8037ab";
      case "3 Stars":
        return "#3c68c0";
      default:
        return "black";
    }
  };

  const filteredWeapons = weaponsData.filter((weapon) => {
    const matchesSearch = weapon.Name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === 'all' || weapon.Quality === rarityFilter;
    return matchesSearch && matchesRarity;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setRarityFilter('all');
  };

  return (
    <div>
      <h2 className="arti-heading">Weapons</h2>
      <p className="arti-subheading">
        Discover various weapons that can enhance your characters' combat abilities.
      </p>

      <div className={`arti-filters-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <input
          type="text"
          placeholder="Search weapons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`arti-search-bar ${isCollapsed ? 'collapsed' : 'expanded'}`}
        />
        <div className="arti-filter-box">
          <div className="filter-options">
            <div onClick={() => setRarityFilter('all')} className={`filter-option ${rarityFilter === 'all' ? 'active' : ''}`}>
              All
            </div>
            <div onClick={() => setRarityFilter('5 Stars')} className={`filter-option ${rarityFilter === '5 Stars' ? 'active' : ''}`} style={{ color: 'gold' }}>
              5★
            </div>
            <div onClick={() => setRarityFilter('4 Stars')} className={`filter-option ${rarityFilter === '4 Stars' ? 'active' : ''}`} style={{ color: '#8037ab' }}>
              4★
            </div>
            <div onClick={() => setRarityFilter('3 Stars')} className={`filter-option ${rarityFilter === '3 Stars' ? 'active' : ''}`} style={{ color: '#3c68c0' }}>
              3★
            </div>
          </div>
        </div>
        <button onClick={resetFilters} className={`arti-reset-button ${isCollapsed ? 'collapsed' : ''}`}>
          Reset
        </button>
      </div>

      {isLoading ? (
        <p>Loading weapons...</p>
      ) : (
        <table className={`artifacts-table ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quality</th>
              <th>Base ATK</th>
              <th>Substat</th>
              <th>Passive</th>
            </tr>
          </thead>
          <tbody>
            {filteredWeapons.length > 0 ? (
              filteredWeapons.map((weapon, index) => (
                <tr key={index}>
                  <td>
                    <img src={weapon.Image} alt="" width="50" height="50" loading="auto" />
                  </td>
                  <td>{weapon.Name}</td>
                  <td style={{ color: getQualityColor(weapon.Quality) }}>{weapon.Quality}</td>
                  <td>{weapon.Base_ATK}</td>
                  <td>{weapon.Substat}</td>
                  <td>{weapon.Passive}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No weapons available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Weapons;

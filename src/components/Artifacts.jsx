import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import '../styles.css';

const Artifacts = ({ isCollapsed }) => {
  const [artifactsData, setArtifactsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [rarityFilter, setRarityFilter] = useState('all');

  useEffect(() => {
    Papa.parse('/data/artifacts.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const filteredData = result.data.map(({ image_url, name, quality, bonuses }) => ({
          Image: image_url,
          Name: name,
          Quality: quality,
          Bonuses: bonuses.replace(/\\n/g, '\n'),
        }));
        setArtifactsData(filteredData);
        setIsLoading(false);
      },
      error: (error) => {
        console.error('Error reading CSV file', error);
        setIsLoading(false);
      },
    });
  }, []);

  const getQualityColor = (quality) => {
    if (quality === "1★") return 'grey';
    if (quality === "1-3★") return '#3c68c0';
    if (quality === "3-4★") return '#8037ab';
    if (quality === "4-5★") return 'gold';
    return 'black';
  };

  // Function to handle filters
  const filteredArtifacts = artifactsData.filter((artifact) => {
    const matchesSearch = artifact.Name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === 'all' || artifact.Quality === rarityFilter;
    return matchesSearch && matchesRarity;
  });

  // Function to reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setRarityFilter('all');
  };

  return (
    <div>
      <h2 className='arti-heading'>Artifacts</h2>
      <p className='arti-subheading'>Discover the various artifacts that can enhance your characters' 
        performance and abilities.</p>

      {/* Search bar and rarity filter */}
      <div className={`arti-filters-container ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <input
          type="text"
          placeholder="Search artifacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`arti-search-bar ${isCollapsed ? 'collapsed' : 'expanded'}`} // Apply isCollapsed logic
        />
        
        {/* Rarity Filter */}
        <div className="arti-filter-box">
          <div className="filter-options">
            <div onClick={() => setRarityFilter('all')} className={`filter-option ${rarityFilter === 'all' ? 'active' : ''}`}>*</div>
            <div onClick={() => setRarityFilter('1★')} className={`filter-option ${rarityFilter === '1★' ? 'active' : ''}`} style={{ color: 'grey' }}>1★</div>
            <div onClick={() => setRarityFilter('1-3★')} className={`filter-option ${rarityFilter === '1-3★' ? 'active' : ''}`} style={{ color: '#3c68c0' }}>1-3★</div>
            <div onClick={() => setRarityFilter('3-4★')} className={`filter-option ${rarityFilter === '3-4★' ? 'active' : ''}`} style={{ color: '#8037ab' }}>3-4★</div>
            <div onClick={() => setRarityFilter('4-5★')} className={`filter-option ${rarityFilter === '4-5★' ? 'active' : ''}`} style={{ color: 'gold' }}>4-5★</div>
          </div>
        </div>

        {/* Reset Button */}
        <button onClick={resetFilters} className={`arti-reset-button ${isCollapsed ? 'collapsed' : ''}`}>
          {isCollapsed ? 'Reset' : 'Reset'}
        </button>
      </div>

      {/* Artifacts List */}
      {isLoading ? (
        <p>Loading artifacts...</p>
      ) : (
        <table className={`artifacts-table ${isCollapsed ? 'collapsed' : 'expanded'}`}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quality</th>
              <th>Bonuses</th>
            </tr>
          </thead>
          <tbody>
            {filteredArtifacts.length > 0 ? (
              filteredArtifacts.map((artifact, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={artifact.Image}
                      alt={artifact.Name}
                      width="50"
                      height="50"
                      loading="auto"
                    />
                  </td>
                  <td>{artifact.Name}</td>
                  <td style={{ color: getQualityColor(artifact.Quality) }}>
                    {artifact.Quality}
                  </td>
                  <td>
                  {artifact.Bonuses.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: line.replace(/^(2 Piece|4 Piece)/, "<strong>$1</strong>"),
                        }}
                      />
                    </React.Fragment>
                  ))}
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No artifacts available.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Artifacts;

import React from 'react';

const CharacterListCard = ({ image, charname, isCollapsed }) => {
  return (
    <div className={`charlist-card ${isCollapsed ? 'collapsed' : ''}`}>
      <img
        src={image}
        alt={charname}
        className={`character-image ${isCollapsed ? 'collapsed-image' : 'expanded-image'}`}
      />
      <div className="charlist-overlay">
        <span className="charlist-text">{charname}</span>  {/* Display the character name */}
      </div>
    </div>
  );
};

export default CharacterListCard;

import React from 'react';

const CharacterCard = ({ image, tags, overlay }) => {
  return (
    <div className="character-card">
      {/* Character Image */}
      <img src={image} alt="Character" className="character-image" />
      {/* Overlay Image */}
      {overlay && (
        <img
          src={overlay}
          alt="Overlay"
          className="character-overlay"
        />
      )}
      {/* Tags */}
      <div className="character-tags">
        {tags &&
          tags.map((tag, index) => (
            <span
              key={index}
              className={`character-tag tag-${tag.toLowerCase()}`} // Dynamically add tag class
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};
export default CharacterCard;
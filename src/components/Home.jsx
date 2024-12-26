import React from 'react';
import { FaUserFriends, FaGem, FaMapMarkedAlt } from 'react-icons/fa';
import { RiTeamFill, RiSwordFill } from 'react-icons/ri';
import { MdLeaderboard } from "react-icons/md";
import { GiBlackHoleBolas, GiMagicHat } from 'react-icons/gi';
import '../Home.css';

const Home = ({ setCurrentPage }) => {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const shortcuts = [
    { id: 'characters', icon: <FaUserFriends className="icon" />, label: 'Characters' },
    { id: 'artifacts', icon: <FaGem className="icon" />, label: 'Artifacts' },
    { id: 'weapons', icon: <RiSwordFill className="icon" />, label: 'Weapons' },
    { id: 'tierList', icon: <MdLeaderboard className="icon" />, label: 'Tier List' },
    { id: 'teambuilding', icon: <RiTeamFill className="icon" />, label: 'Team Building' },
    { id: 'spiralabyss', icon: <GiBlackHoleBolas className="icon" />, label: 'Spiral Abyss' },
    { id: 'imaginariumtheater', icon: <GiMagicHat className="icon" />, label: 'Imaginarium Theater' },
    { id: 'map', icon: <FaMapMarkedAlt className="icon" />, label: 'Map' },
  ];

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Tier List App! Here you can find information on various characters and their tiers.</p>
      
      <div className="quick-shortcuts">
        <h3>Quick Shortcuts</h3>
        <div className="shortcuts-container">
          {shortcuts.map((item) => (
            <div 
              key={item.id} 
              className="shortcut-button" 
              onClick={() => handlePageChange(item.id)}
            >
              <div className="icon-container">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

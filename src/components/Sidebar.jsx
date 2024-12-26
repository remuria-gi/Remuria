import React from 'react';
import '../Sidebar.css';
import { FaHome, FaUserFriends, FaGem, FaInfoCircle, FaMapMarkedAlt } from 'react-icons/fa';
import { RiTeamFill, RiSwordFill } from 'react-icons/ri';
import { MdLeaderboard } from "react-icons/md";
import { GiBlackHoleBolas, GiMagicHat } from 'react-icons/gi';

const Sidebar = ({ setCurrentPage, currentPage, isCollapsed }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page); // This should now correctly set the page in the parent component
  };

  const sidebarItems = [
    { id: 'home', icon: <FaHome className="icon" />, label: 'Home' },
    { id: 'characters', icon: <FaUserFriends className="icon" />, label: 'Characters' },
    { id: 'artifacts', icon: <FaGem className="icon" />, label: 'Artifacts' },
    { id: 'weapons', icon: <RiSwordFill className="icon" />, label: 'Weapons' },
    { id: 'tierList', icon: <MdLeaderboard className="icon" />, label: 'Tier List' },
    { id: 'teambuilding', icon: <RiTeamFill className="icon" />, label: 'Team Building' },
    { id: 'spiralabyss', icon: <GiBlackHoleBolas className="icon" />, label: 'Spiral Abyss' },
    { id: 'imaginariumtheater', icon: <GiMagicHat className="icon" />, label: 'Imaginarium Theater' },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <ul className="sidebar-list">
        {sidebarItems.map((item) => (
          <li
            key={item.id}
            className={`sidebar-item ${currentPage === item.id ? 'selected' : ''}`} // Use currentPage for active state
            onClick={() => handlePageChange(item.id)} // Call handlePageChange which uses setCurrentPage
          >
            {item.icon}
            {!isCollapsed && <span>{item.label}</span>}
          </li>
        ))}

        <div className="sidebar-line"></div>

        <li
          key="map"
          className={`sidebar-item last-item ${currentPage === 'map' ? 'selected' : ''}`}
          onClick={() => handlePageChange('map')}
        >
          <FaMapMarkedAlt className="icon" />
          {!isCollapsed && <span>Map</span>}
        </li>
        <li
          key="about"
          className={`sidebar-item last-item ${currentPage === 'about' ? 'selected' : ''}`}
          onClick={() => handlePageChange('about')}
        >
          <FaInfoCircle className="icon" />
          {!isCollapsed && <span>About</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

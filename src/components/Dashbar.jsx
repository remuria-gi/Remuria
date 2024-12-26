import React from 'react';
import '../Sidebar.css';

const Dashbar = ({ isCollapsed, setIsCollapsed }) => {
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="dashbar">
      <div className="dashbar-content">
        <h1 className={`dashbar-title ${isCollapsed ? 'collapsed' : ''}`}>
          {isCollapsed ? 'R' : 'REMURIA'}
        </h1>
        <button 
          className={`collapse-btn ${isCollapsed ? 'collapsed' : ''}`} 
          onClick={toggleSidebar}
          aria-label={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)' }}
          >
            <path
              fillRule="evenodd"
              d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"
            />
          </svg>
        </button>
      </div>
      <div className={`divider ${isCollapsed ? 'collapsed' : ''}`} />
    </div>
  );
};

export default Dashbar;

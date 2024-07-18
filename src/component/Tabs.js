// src/Tabs.js
import React, { useState } from 'react'; 

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs">
      <div className="tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`tab-button ${tab.label === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`tab-pane ${tab.label === activeTab ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

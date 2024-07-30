// src/Window.js
import React, { useState } from 'react';
import './window.css';
import Tabs from './Tabs';

const Window = ({ isOpen, onClose, title, tabs, fullscreenWidth }) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

  if (!isOpen) return null;
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>

    <div className="window-overlay">
      <div className={`window ${isFullscreen ? 'fullscreen' : ''}`} style={{ width: isFullscreen ? fullscreenWidth : '600px' }}>
      <div className="window-header">
        
          <button className="fullscreen-button" > - </button>
          <button className="fullscreen-button" onClick={toggleFullscreen}>
            {isFullscreen ? '⤤' : '⤢'} {/* Toggle between full screen and normal screen icons */}
          </button>
        </div>
        <div className="window-content">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Window;

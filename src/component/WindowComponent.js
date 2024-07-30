import React, { useState } from 'react';
import './WindowComponent.css'; // Assuming you have your own framework for styling

const WindowComponent = ({ id, title, components, onClose, handleMinimize }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const minimize = () => {
    handleMinimize(true);
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    onClose(id);
  };

  const handleTabRemove = (index) => {
    const newComponents = components.filter((_, i) => i !== index);
    setActiveTab((prev) => (prev === index ? 0 : prev));
    // Update components state accordingly
  };

  return (
    !isMinimized && (
      <div className={`window-container ${isMaximized ? 'maximized' : ''}`}>
        <div className="window-header">
          {/* <span className="window-title">{title}</span> */}
          <div className="window-actions">
            <button onClick={minimize} style={{fontSize: '20px'}}>-</button>
            {/* <button onClick={handleMaximize}>{isMaximized ? '🗗' : '🗖'}</button> */}
            <button onClick={handleMaximize}>{isMaximized ? '⤤' : '⤢'}</button>

            {/* <button onClick={handleClose}>X</button> */}
          </div>
        </div>
        <div className="window-tabs">
          {components.map((component, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {component.title}
              <button onClick={() => handleTabRemove(index)}>x</button>
            </div>
          ))}
        </div>
        <div className="window-content">
          {components[activeTab].content}
        </div>
      </div>
    )
  );
};

export default WindowComponent;

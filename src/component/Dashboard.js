import React, { useState } from 'react';
import WindowComponent from './WindowComponent';

export const Component1 = () => {
    return (
        <div className="component1">
            <h1>Component 1</h1>
        </div>
    )

}

export const Component2 = () => {
    return (
        <div className="component2">
            <h1>Component 2</h1>
        </div>
    )

}
const Dashboard = () => {
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [windows, setWindows] = useState([
    {
      id: 1,
      title: 'Window 1',
      components: [
        { title: 'Tab 1', content: <Component1 /> },
        { title: 'Tab 2', content: <Component2 /> },
      ],
    },
    // Add more windows as needed
  ]);

  const handleMinimize = (id) => {
    setMinimizedWindows((prev) => [...prev, id]);
  };

  const handleReopen = (id) => {
    setMinimizedWindows((prev) => prev.filter((windowId) => windowId !== id));
  };

  const handleClose = (id) => {
    setWindows((prev) => prev.filter((window) => window.id !== id));
  };

  return (
    <div>
      <div className="dashboard">
        {/* Other dashboard content */}
        <div className="minimized-windows">
          <span>Minimized Windows: {minimizedWindows.length}</span>
          {minimizedWindows.map((id) => (
            <button key={id} onClick={() => handleReopen(id)}>
              Reopen Window {id}
            </button>
          ))}
        </div>
      </div>
      {windows.map((window) => (
        <WindowComponent
          key={window.id}
          id={window.id}
          title={window.title}
          components={window.components}
          onClose={handleClose}
        />
      ))}
    </div>
  );
};

export default Dashboard;

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
  const [windows, setWindows] = useState([]);
  const [windowCounter, setWindowCounter] = useState(1); // For generating unique window IDs
  const [isWindowOpened, setIsWindowOpened] = useState(false);

  const handleOpenWindow = () => {
    if(!isWindowOpened) {
        const newWindow = {
          id: windowCounter,
          title: `Window ${windowCounter}`,
          components: [
            { title: 'Tab 1', content: <Component1 /> },
            { title: 'Tab 2', content: <Component2 /> },
          ],
        };
        setWindows((prev) => [...prev, newWindow]);
        setWindowCounter((prev) => prev + 1);
        setIsWindowOpened(true)

    }
  };

  const handleMinimize = (id) => {
    setMinimizedWindows((prev) => [...prev, id]);
    setIsWindowOpened((prev) => !prev)
  };

  const handleReopen = (id) => {
    setMinimizedWindows((prev) => prev.filter((windowId) => windowId !== id));
  };

  const handleClose = (id) => {
    setWindows((prev) => prev.filter((window) => window.id !== id));
  };

  return (
    <div>
          <div style={{'textAlign': 'right'}}>
      <button onClick={handleOpenWindow}>Open Window</button>
      </div>
      <div className="dashboard">
        {/* Other dashboard content */}
        {/* <div className="minimized-windows">
          <span>Minimized Windows: {minimizedWindows.length}</span>
          <button  onClick={() => handleOpenWindow}>
            Open Minimized Window
            </button>
          
        </div> */}
      </div>
      {windows.map((window) => (
        <WindowComponent
          key={window.id}
          id={window.id}
          title={window.title}
          components={window.components}
          onClose={handleClose}
          handleMinimize={handleMinimize}
        />
      ))}
    </div>
  );
};

export default Dashboard;


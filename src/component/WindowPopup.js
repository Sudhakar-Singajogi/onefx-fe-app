import React, { useState } from 'react'
import Window from './Window'

function WindowPopup() {
   
    const [isWindowOpen, setIsWindowOpen] = useState(true);

  const openWindow = () => setIsWindowOpen(true);
  const closeWindow = () => setIsWindowOpen(false);

  const tabs = [
    { label: 'Tab 1', content: <p>This is the content of Tab 1.</p> },
    { label: 'Tab 2', content: <p>This is the content of Tab 2.</p> },
    { label: 'Tab 3', content: <p>This is the content of Tab 3.</p> },
  ];

  return (
    <div className="App">
      {/* <button onClick={openWindow}>Open Window</button> */}
      <Window isOpen={isWindowOpen} onClose={closeWindow} title="My Window with Tabs" tabs={tabs}  fullscreenWidth="80%" />
    </div>
  );
}

export default WindowPopup
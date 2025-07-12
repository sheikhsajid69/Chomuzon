import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  function toggleSwitch() {
    setIsOn(!isOn);
  }

  const styles = {
    container: {
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: isOn ? '#ffffff' : '#333333',
      color: isOn ? '#333333' : '#ffffff',
      transition: 'all 0.3s ease'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h1>The Light is {isOn ? "ON" : "OFF"}</h1>
      <button 
        onClick={toggleSwitch} 
        style={styles.button}
      >
        Toggle Light
      </button>
    </div>
  );
}

export default Toggle;

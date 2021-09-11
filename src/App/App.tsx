
import './App.css';
import Display from '../Display/Display';
import React, { useEffect } from 'react';

function App() {
  const [lightThemed, isLightThemed] = React.useState(true)
  const height = window.innerHeight
  const width = window.innerWidth
  const changeTheme = () => {
    lightThemed ? isLightThemed(false) : isLightThemed(true)
  }
  return (
    <div className="App">
      <Display 
      lightThemed={lightThemed} 
      buttonClick={changeTheme} 
      height={height}
      width={width}
      />
    </div>
  );
}

export default App;

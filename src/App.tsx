import React, { useState } from 'react';

// Components
import Header from './components/Header';

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <Header isDark={isDarkTheme} changeTheme={handleThemeChange}/>
  );
}

export default App;

import React, { useState } from 'react';
import Routes from './routes';

import GlobalStyles from './assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './assets/styles/themes';


function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName]
  return (
    <ThemeProvider theme={currentTheme}>      
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

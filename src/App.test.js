import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <h1>Test App</h1>
        <p>If you can see this, styled-components is working!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
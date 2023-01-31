import { ThemeProvider } from '@emotion/react';
import Login from './pages/Login';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;

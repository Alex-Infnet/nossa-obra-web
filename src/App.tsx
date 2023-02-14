import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import router from './routes/Route';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

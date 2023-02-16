import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import router from './routes/Route';
import { RouterProvider } from 'react-router-dom';
import RouteComponents from './routes/RouteComponents';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteComponents />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

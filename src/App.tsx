import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Route from './routes/Route';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={Route} />
    </ThemeProvider>
  );
}

export default App;

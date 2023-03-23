import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Route from './routes/Route';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/store';
import ApiProvider from './context/ApiContext';

const App = () => {
  return (
    <ApiProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={Route} />
        </ThemeProvider>
      </Provider>
    </ApiProvider>
  );
}

export default App;

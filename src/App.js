import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './contexts/ThemeProvider';
import { router } from './routes/routes';

function App() {
  const {dark} = useContext(ThemeContext)
  return (
    <div data-theme={dark ? 'dark' : 'light'} className="h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

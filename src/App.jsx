import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importer les icônes
import Calculator from './Calculator';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
        <button
          onClick={toggleDarkMode}
          className="mb-6 p-3 bg-white text-blue-500 rounded-full hover:bg-gray-100 dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-600 flex items-center justify-center transition-colors duration-500"
        >
          {darkMode ? (
            <FaSun className="w-6 h-6" />
          ) : (
            <FaMoon className="w-6 h-6" />
          )}
        </button>
        <Calculator />
      </div>
    </div>
  );
}

export default App;

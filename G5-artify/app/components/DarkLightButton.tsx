'use client';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

// Functional component to render a theme toggle button
function DarkLightButthon() {
  // Destructure theme and setTheme from useTheme hook
  const { theme, setTheme } = useTheme();

   // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log(theme)
  };

  // Check if the current theme is dark mode
  const isDarkMode = theme === 'dark';

  return (
    // Render a button element with inline-flex layout and cursor-pointer style
    <button
      className="relative inline-flex items-center cursor-pointer focus:outline-none"
      onClick={toggleTheme}
    >
      {/* Container for the moon and sun icons */}
      <div className="theme-button">
        <div className="theme-button-moon">
          <FiMoon className={isDarkMode ? 'text-blue-400' : 'text-gray-400'} />
        </div>
        <div className="theme-button-sun">
          <FiSun className={isDarkMode ? 'text-gray-500' : 'text-yellow-500'} />
        </div>
      </div>
    </button>
  );
}

export default DarkLightButthon;
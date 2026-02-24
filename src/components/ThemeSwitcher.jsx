import { useContext } from 'react';
import { ThemeContext } from '../contexts/themecontext.jsx';
import './theme-switcher.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        className="toggle-switch-input"
      />
      <span className={`toggle-switch-slider${theme === 'dark' ? ' dark' : ''}`}>
        <span className="toggle-switch-knob" />
      </span>
    </label>
  );
};

export default ThemeSwitcher;

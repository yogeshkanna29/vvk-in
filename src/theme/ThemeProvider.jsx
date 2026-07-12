import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({
  children
}) => {
  const {
    pathname
  } = useRouter();
  const [theme, setTheme] = useState('light');
  const [isThemeReady, setIsThemeReady] = useState(false);

  const removePageLoader = () => {
    const pageLoader = document.querySelector('.page-loader');

    if (pageLoader) {
      pageLoader.remove();
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let timer;
    timer = setTimeout(() => removePageLoader(), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('vvk-theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : preferredTheme);
    setIsThemeReady(true);
  }, []);

  useEffect(() => {
    if (isThemeReady) document.documentElement.dataset.theme = theme;
  }, [isThemeReady, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('vvk-theme', nextTheme);
      return nextTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

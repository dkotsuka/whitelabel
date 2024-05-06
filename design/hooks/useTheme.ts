import {useState} from 'react';
import {Themes, ThemesType} from '../theme';

export const useTheme = () => {
  const [theme, setTheme] = useState<keyof ThemesType>('base');

  return {
    theme: Themes[theme],
    setTheme,
  };
};

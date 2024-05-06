import {BaseTheme, BaseThemeType} from '../base/base.theme';

export const DarkTheme: BaseThemeType = {
  ...BaseTheme,
  colors: {
    ...BaseTheme.colors,
    background: {
      main: '#333',
      card: '#444',
    },
    text: {
      main: '#EEE',
      disabled: '#999',
      placeholder: '#BBB',
    },
  },
};

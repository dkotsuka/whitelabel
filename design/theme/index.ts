import {BaseTheme} from './base/base.theme';
import {DarkTheme} from './dark/dark.theme';

export const Themes = {
  base: BaseTheme,
  dark: DarkTheme,
};
export type ThemesType = typeof Themes;

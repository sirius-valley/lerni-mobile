import { rgba } from 'polished';
import { ButtonVariant } from './constants';
import { theme } from './theme';

// type CSSProperties = { [key: string]: string | number};
export type CSSProperties = {
  [key: string]:
    | string
    | number
    | {
        [x: string]: string | number;
      };
};

const camelToDash = (str: string): string => {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

export const jsToCss = (styles: CSSProperties): string => {
  return Object.keys(styles)
    .map((key) => `${camelToDash(key)}: ${styles[key]};`)
    .join('\n');
};

export const getStyleColorByVariant = (componentVariant: ButtonVariant) => {
  switch (componentVariant) {
    case 'primary':
      return theme.primary500;
    case 'dark':
      return rgba(theme.primary800, 0.2);
    case 'red':
      return theme.red500;
    default:
      return theme.gray300;
  }
};

export enum ModalTypeEnum {
  INTRO_MODAL = 'INTRO_MODAL',
}

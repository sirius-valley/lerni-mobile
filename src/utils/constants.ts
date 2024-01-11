export enum ComponentVariantType {
  DARK = 'dark',
  PRIMARY = 'primary',
  RED = 'red',
  GHOST = 'ghost',
}

export type ButtonVariant = 'dark' | 'primary' | 'red' | 'ghost';

export interface MessageProps {
  user?: 'student' | 'professor';
  isLast?: boolean;
  content?: string;
  type?: 'image' | 'text';
}

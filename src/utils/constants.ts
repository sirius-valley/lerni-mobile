import { StyledPropertiesInterface } from '../components/styled/styles';

export enum ComponentVariantType {
  DARK = 'dark',
  PRIMARY = 'primary',
  RED = 'red',
  GHOST = 'ghost',
}

export type ButtonVariant = 'dark' | 'primary' | 'red' | 'ghost';

export interface MessageContainerProps extends StyledPropertiesInterface {
  user?: UserTypes;
  handleOpenImage?: () => void;
}

export interface MessageProps extends MessageContainerProps {
  id?: string;
  isLast?: boolean;
  content: string;
  type: 'image' | 'text';
}

export type ToastTypes = 'success' | 'info' | 'error';

export type UserTypes = 'student' | 'professor';

import React from 'react';

export enum ComponentVariantType {
  DARK = 'dark',
  PRIMARY = 'primary',
  RED = 'red',
  GHOST = 'ghost',
}

export type ButtonVariant = 'dark' | 'primary' | 'red' | 'ghost';

export interface MessageContainerProps {
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

export type TriviaStatusTypes = 'not_started' | 'approved' | 'disapproved';

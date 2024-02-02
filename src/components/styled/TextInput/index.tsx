import { useTheme } from 'styled-components';
import { StyledTextInput } from './styles';
import { CSSProperties } from '../../../utils/utils';
import { forwardRef } from 'react';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  value: string;
  css?: CSSProperties;
  type?: 'password' | 'text';
  multiline?: boolean;
  scrollEnabled?: boolean;
  maxLength?: number;
}

export const TextInput = forwardRef<any, TextInputProps>(
  (
    {
      placeholder,
      disabled = false,
      error = false,
      onChangeText,
      onBlur,
      value,
      css,
      type = 'text',
      multiline = false,
      scrollEnabled = true,
      maxLength,
    }: TextInputProps,
    ref: any,
  ) => {
    const theme = useTheme();

    return (
      <StyledTextInput
        placeholder={placeholder}
        placeholderTextColor={theme.gray300}
        css={css}
        error={error}
        disabled={disabled}
        value={value}
        onChangeText={(value: string) => !disabled && onChangeText(value)}
        onBlur={() => onBlur && onBlur()}
        autoCapitalize="none"
        secureTextEntry={type === 'password'}
        multiline={multiline}
        scrollEnabled={scrollEnabled}
        maxLength={maxLength}
        ref={ref}
      />
    );
  },
);

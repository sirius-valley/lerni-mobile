import { useTheme } from 'styled-components';
import { StyledTextInput } from './styles';
import { CSSProperties } from '../../../utils/utils';
import { ThemeColors } from '../../../utils/theme';
import { ComponentProps, forwardRef } from 'react';
import { TextInput as TextInputNative } from 'react-native';

export interface TextInputProps extends ComponentProps<typeof TextInputNative> {
  placeholder?: string;
  placeholderColor?: keyof ThemeColors;
  disabled?: boolean;
  error?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value: string;
  css?: CSSProperties;
  type?: 'password' | 'text';
  multiline?: boolean;
  scrollEnabled?: boolean;
  maxLength?: number;
  testID?: string;
}

export const TextInput = forwardRef<any, TextInputProps>(
  (
    {
      placeholder,
      placeholderColor = 'gray300',
      disabled = false,
      error = false,
      onChangeText,
      onBlur,
      onFocus,
      value,
      css,
      type = 'text',
      multiline = false,
      scrollEnabled = true,
      maxLength,
      testID,
    }: TextInputProps,
    ref: any,
  ) => {
    const theme = useTheme();

    return (
      <StyledTextInput
        testID={testID}
        placeholder={placeholder}
        placeholderTextColor={theme[placeholderColor]}
        css={css}
        error={error}
        disabled={disabled}
        value={value}
        onChangeText={(value: string) => !disabled && onChangeText(value)}
        onBlur={() => onBlur && onBlur()}
        onFocus={() => onFocus && onFocus()}
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

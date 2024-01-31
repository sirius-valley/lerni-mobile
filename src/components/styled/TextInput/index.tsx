import { useTheme } from 'styled-components';
import { StyledTextInput } from './styles';
import { CSSProperties } from '../../../utils/utils';
import { ThemeColors } from '../../../utils/theme';

export interface TextInputProps {
  placeholder?: string;
  placeholderColor?: keyof ThemeColors;
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

export const TextInput = ({
  placeholder,
  disabled = false,
  placeholderColor = 'gray300',
  error = false,
  onChangeText,
  onBlur,
  value,
  css,
  type = 'text',
  multiline = false,
  scrollEnabled = true,
  maxLength,
}: TextInputProps) => {
  const theme = useTheme();

  return (
    <StyledTextInput
      placeholder={placeholder}
      placeholderTextColor={theme[placeholderColor]}
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
    />
  );
};

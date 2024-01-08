import { useTheme } from 'styled-components';
import { StyledTextInput } from './styles';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  value: string;
  css?: { [key in string]: string | number | boolean };
  type?: "password" | "text"
}

export const TextInput = ({
  placeholder,
  disabled = false,
  error = false,
  onChangeText,
  onBlur,
  value,
  css,
  type = "text"
}: TextInputProps) => {
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
      autoCapitalize='none'
      secureTextEntry={type === "password"}
    />
  )
};

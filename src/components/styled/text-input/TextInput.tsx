import { useTheme } from 'styled-components';
import { StyledTextInput } from './styles';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  onChangeText: (value: string) => void;
  value: string;
  css?: { [key in string]: string | number | boolean };
}

export const TextInput = ({
  placeholder,
  disabled = false,
  error = false,
  onChangeText,
  value,
  css,
}: TextInputProps) => {
  const theme = useTheme();

  return <StyledTextInput placeholder={placeholder} placeholderTextColor={theme.gray300} css={css} error={error} disabled={disabled} value={value} onChangeText={onChangeText} />;
};

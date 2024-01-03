import { StyledTextInput } from './styles';

export interface TextInputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  css?: { [key in string]: string | number | boolean };
}

export const TextInput = ({
  placeholder,
  disabled = false,
  error = false,
  css,
}: TextInputProps) => {
  return <StyledTextInput placeholder={placeholder} css={css} error={error} disabled={disabled} />;
};

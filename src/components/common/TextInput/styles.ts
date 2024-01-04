import { TextInputProps } from './TextInput';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput<TextInputProps>`
  border-radius: 8px;
  padding: 6px 16px 6px 16px;
  gap: 8px;
  font-size: 16px;
  font-family: 'Roboto-Medium';
  color: ${(props) => {
    if (props.error) {
      return props.theme.red500;
    } else if (props.disabled) {
      return props.theme.gray400;
    } else {
      return props.theme.gray900;
    }
  }};

  background-color: ${(props) => {
    if (props.error) {
      return props.theme.white;
    } else if (props.disabled) {
      return props.theme.gray200;
    } else {
      return props.theme.white;
    }
  }};
`;

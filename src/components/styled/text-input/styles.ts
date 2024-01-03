import { TextInputProps } from './TextInput';
import styled from 'styled-components/native';

export const StyledTextInput = styled.TextInput<TextInputProps>`
  borderradius: 8px;
  padding: 6px 16px 6px 16px;
  gap: 8px;
  fontsize: 16px;
  fontfamily: 'Roboto-Medium';
  color: ${(props) => {
    if (props.error) {
      return props.theme.red500;
    } else if (props.disabled) {
      return props.theme.gray400;
    } else {
      return props.theme.gray900;
    }
  }};

  backgroundcolor: ${(props) => {
    if (props.error) {
      return props.theme.white;
    } else if (props.disabled) {
      return props.theme.gray200;
    } else {
      return props.theme.white;
    }
  }};

  :placeholder {
    color: ${(props) => props.theme.gray300};
    backgroundcolor: ${(props) => props.theme.white};
  }
`;

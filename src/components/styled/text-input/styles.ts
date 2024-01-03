import { TextInputStatus } from '../../../utils/constants';
import { TextInputProps } from './TextInput';
import styled, { DefaultTheme, useTheme } from 'styled-components/native';

const getTextInputStatus = () => {
  const theme = useTheme();
  return {
    [TextInputStatus.DEFAULT]: {
      color: theme.gray900,
      backgroundColor: theme.white,
    },
    [TextInputStatus.PLACEHOLDER]: {
      color: theme.gray300,
      backgroundColor: theme.white,
    },
    [TextInputStatus.ERROR]: {
      color: theme.red500,
      backgroundColor: theme.white,
    },
    [TextInputStatus.DISABLED]: {
      color: theme.gray400,
      backgroundColor: theme.gray200,
    },
  };
};

type StyledTextInputProps = {
  status: TextInputStatus;
} & TextInputProps;

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  alignitems: center;
  borderradius: 8px;
  padding: 6px 16px 6px 16px;
  gap: 8px;
  fontsize: 16px;
  fontfamily: 'Roboto-Medium';
  color: ${(props) => getTextInputStatus()[props.status].color};
  backgroundcolor: ${(props) => getTextInputStatus()[props.status].backgroundColor};
`;

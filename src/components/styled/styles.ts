import { SafeAreaView, View, Text } from 'react-native';
import styled, { css as styledComponent } from 'styled-components';
import { CSSProperties } from '../../utils/utils';
import { ThemeColors } from '../../utils/theme';

interface StyledPropertiesInterface {
  css?: CSSProperties;
}

export type TextVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'body3';

interface StyledTextInterface extends StyledPropertiesInterface {
  variant?: TextVariant;
  color?: keyof ThemeColors;
}

export const StyledText = styled(Text)<StyledTextInterface>`
  color: ${(props) => (props.color ? props.theme[props.color] : props.theme.primary900)};
  ${({ variant, theme }) => styledComponent(theme[variant || 'body1'])};
  ${({ css }) => css && styledComponent(css)};
`;

export const StyledSafeAreaView = styled(SafeAreaView)<StyledPropertiesInterface>`
  flex-direction: row;
  flex: 1;
  padding: 0;
  ${({ css }) => css && styledComponent(css)};
`;
export const StyledRow = styled(View)<StyledPropertiesInterface>`
  display: flex;
  flex-direction: row;
  ${({ css }) => css && styledComponent(css)};
`;
export const StyledColumn = styled(View)<StyledPropertiesInterface>`
  display: flex;
  flex-direction: column;
  ${({ css }) => css && styledComponent(css)};
`;
export const StyledBox = styled(View)<StyledPropertiesInterface>`
  ${({ css }) => css && styledComponent(css)};
`;

import { SafeAreaView, View, Text } from 'react-native';
import styled, { css as styledComponent } from "styled-components";
import { CSSProperties, jsToCss } from "../../utils/utils";

interface StyledPropertiesInterface {
  css?: CSSProperties
}

type TextVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'body3'

interface StyledTextInterface extends StyledPropertiesInterface {
  variant?: TextVariant
}

export const StyledText = styled(Text) <StyledTextInterface>`
  color: ${(props) => props.theme.primary900};
  ${({ variant, theme }) => styledComponent(theme[variant || 'body1'])};
  ${({ css }) => css && styledComponent(css)};
`

export const StyledSafeAreaView = styled(SafeAreaView) <StyledPropertiesInterface>`
  flex-direction: row;
  flex: 1;
  padding: 0;
  ${(props) => props.css && jsToCss(props.css)}
`
export const StyledRow = styled(View) <StyledPropertiesInterface>`
  display: flex;
  flex-direction: row;
  ${(props) => props.css && jsToCss(props.css)}
`
export const StyledColumn = styled(View) <StyledPropertiesInterface>`
  display: flex;
  flex-direction: column;
  ${(props) => props.css && jsToCss(props.css)}
`
export const StyledBox = styled(View) <StyledPropertiesInterface>`
  ${(props) => props.css && jsToCss(props.css)}
`
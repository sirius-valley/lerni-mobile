import styled, {css as styledComponent} from "styled-components/native";
import {Text} from "react-native";
import {CSSProperties} from "../../utils/utils";

interface StyledPropertiesInterface {
    css?: CSSProperties
}

type TextVariant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'body3'

interface StyledTextInterface extends StyledPropertiesInterface {
    variant?: TextVariant
}

export const StyledText = styled(Text)<StyledTextInterface>`
    color: ${(props) => props.theme.primary900};
    ${({variant, theme}) => styledComponent(theme[variant || 'body1'])};
    ${({css}) => css && styledComponent(css)};
`

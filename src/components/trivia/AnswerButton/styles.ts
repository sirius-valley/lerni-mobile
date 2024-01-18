import styled, {CSSObject, css as styledComponent} from 'styled-components';
import {StyledBox, StyledPropertiesInterface} from "../../styled/styles";
import {DefaultTheme} from "styled-components/native";

export type AnswerStatus = 'unselected' | 'selected' | 'default';

const getStyledFromStatus = (theme: DefaultTheme): Record<AnswerStatus, CSSObject> => ({
    unselected: {
        backgroundColor: theme.primary700,
    },
    selected: {
        backgroundColor: theme.primary500,
    },
    default: {
        backgroundColor: 'transparent',
        borderColor:theme.primary500,
        borderWidth:1,
        borderStyle:'solid'
    },
})

interface StyledAnswerButtonInterface extends StyledPropertiesInterface {
    status: AnswerStatus;
}

export const StyledAnswerButton = styled(StyledBox)<StyledAnswerButtonInterface>`
    padding: 6px 16px;
    border-radius: 8px;
    width: 100%;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    ${({status,theme}) => getStyledFromStatus(theme)[status]};
    ${({ css }) => css && styledComponent(css)};

`

import styled, { CSSObject, DefaultTheme, css as styledComponent } from 'styled-components';
import { StyledBox, StyledPropertiesInterface } from '../../styled/styles';

export type AnswerStatus = 'unselected' | 'correct' | 'loading' | 'wrong';

const getStyledFromStatus = (theme: DefaultTheme): Record<AnswerStatus, CSSObject> => ({
  unselected: {
    backgroundColor: theme.primary700,
  },
  correct: {
    backgroundColor: theme.primary500,
  },
  loading: {
    backgroundColor: theme.primary600,
  },
  wrong: {
    backgroundColor: theme.red600,
  },
});
interface StyledAnswerButtonInterface extends StyledPropertiesInterface {
  status: AnswerStatus;
}
export const StyledAnswerButton = styled(StyledBox)<StyledAnswerButtonInterface>`
  padding: 6px 12px;
  border-radius: 8px;
  width: 100%;
  min-height: 52px;
  align-items: center;
  justify-content: center;
  ${({ status, theme }) => getStyledFromStatus(theme)[status]};
  ${({ css }) => css && styledComponent(css)};
`;

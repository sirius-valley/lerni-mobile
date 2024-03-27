import styled from 'styled-components/native';
import { StyledBox, StyledText } from '../../styled/styles';
import { ThemeColors } from '../../../utils/theme';
import { QuestionPropsStatus } from '.';

export const TriviaQuestionContainer = styled(StyledBox)`
  border-radius: 12px;
  width: 330px;
  height: 164px;
  background: ${({ theme }) => theme.white};
  z-index: 2;
  position: relative;
  justify-content: center;
  align-items: center;
`;

interface StatusStyledText {
  status: QuestionPropsStatus;
}

export const StatusStyledText = styled(StyledText)<StatusStyledText>`
  font-family: 'Roboto-Black';
  font-size: 36px;
  color: ${({ theme, status }) => {
    switch (status) {
      case 'correct':
        return theme.primary500;
      case 'incorrect':
        return theme.red600;
      default:
        return theme.gray800;
    }
  }};
`;

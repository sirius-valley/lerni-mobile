import styled from 'styled-components/native';
import { StyledColumn, StyledText } from '../styles';
import { QuestionnaireChoiceProps } from '.';
import { Dimensions } from 'react-native';

export const StyledQuestionnaireChoiceMainContainer = styled(StyledColumn)`
  gap: 6px;
  width: ${Dimensions.get('window').width * 0.8}px;
  align-items: 'flex-end';
`;

export const StyledQuestionnaireChoiceContainer = styled.Pressable<QuestionnaireChoiceProps>`
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 13px 36px;
  border-radius: ${(props) => {
    if (props.status === 'selected' && props.disabled) {
      return '10px 10px 2px 10px';
    } else {
      return '10px';
    }
  }};
  background-color: ${(props) => {
    if (props.status === 'default_not_selected') {
      return 'transparent';
    } else if (props.status === 'selected' || props.status === 'default_selected') {
      return props.theme.primary200;
    } else if (props.status === 'not_selected') {
      return 'rgba(192, 238, 242, 0.2)';
    }
  }};
  border: ${(props) => {
    if (props.status === 'not_selected') return `1px solid ${props.theme.primary900}`;
    return `1px solid ${props.theme.primary200}`;
  }};
`;

export const StyledQuestionnaireChoiceText = styled(StyledText)<QuestionnaireChoiceProps>`
  color: ${(props) => {
    if (props.status === 'default_not_selected') {
      return props.theme.primary200;
    } else {
      return props.theme.primary900;
    }
  }};
  text-align: center;
  font-family: Roboto-Bold;
  font-weight: 700;
  font-size: 14px;
`;

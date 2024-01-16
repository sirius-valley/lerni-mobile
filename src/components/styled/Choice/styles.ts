import styled from 'styled-components/native';
import { StyledColumn, StyledText } from '../styles';
import { ChoiceProps } from '.';
import { Dimensions } from 'react-native';

export const StyledChoiceMainContainer = styled(StyledColumn)`
  gap: 12px;
  width: ${Dimensions.get('window').width * 0.6}px;
  align-items: 'flex-end';
`;

export const StyledChoiceContainer = styled.Pressable<ChoiceProps>`
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 13px 36px;
  align-self: stretch;
  border-radius: ${(props) => {
    if (props.status === 'question') {
      return '10px';
    } else {
      return '10px 10px 2px 10px';
    }
  }};
  background-color: ${(props) => {
    if (props.status === 'question') {
      return 'transparent';
    } else if (props.status === 'selected') {
      return props.theme.primary200;
    } else if (props.status === 'not_selected') {
      return 'rgba(192, 238, 242, 0.2)';
    }
  }};
  border: ${(props) => {
    if (props.status === 'question') {
      return `1px solid ${props.theme.primary200}`;
    } else if (props.status === 'selected') {
      return `1px solid ${props.theme.primary200}`;
    } else if (props.status === 'not_selected') {
      return `none`;
    }
  }};
`;

export const StyledChoiceText = styled(StyledText)<ChoiceProps>`
  color: ${(props) => {
    if (props.status === 'question') {
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

import styled from 'styled-components/native';
import { StyledColumn, StyledText } from '../styles';
import { ChoiceProps } from '.';
import { Dimensions } from 'react-native';

export const ChoiceMainContainer = styled(StyledColumn)<ChoiceProps>`
  gap: 12px;
  width: ${Dimensions.get('window').width * 0.9}px;
  align-items: ${(props) => {
    if (props.status === "question") {
      return 'flex-start';
    } else {
      return 'flex-end';
    }
  }};
`;

export const ChoiceContainer = styled.Pressable<ChoiceProps>`
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 13px 36px; 
  align-self: stretch;
  border-radius: 8px;
  background-color: ${(props) => {
    if (props.status === "question") {
      return props.theme.primary900;
    } else if (props.status === "selected") {
      return props.theme.primary200;
    } else if (props.status === "not_selected" || props.pressed === true) {
      return props.theme.primary800;
    }
  }};
  border: ${(props) => {
    if (props.status === "question") {
      return `1px solid ${props.theme.primary200}`;
    } else if (props.status === "selected") {
      return `1px solid ${props.theme.primary200}`;
    } else if (props.status === "not_selected" || props.pressed === true) {
      return `1px solid ${props.theme.primary800}`;
    }
  }};
`;

export const ChoiceText = styled(StyledText)<ChoiceProps>`
  color: ${(props) => {
    if (props.status === "question") {
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
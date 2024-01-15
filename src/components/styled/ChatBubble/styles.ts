import styled from 'styled-components/native';
import { MessageProps } from '../../../utils/constants';
import { Dimensions } from 'react-native';

export const StyledImageBubble = styled.Image<MessageProps>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => {
    if (props.user === 'professor') {
      return 'flex-start';
    } else if (props.user === 'student') {
      return 'flex-end';
    }
  }};
  border-radius: ${(props) => {
    if (props.user === 'professor') {
      return '16px 16px 16px 2px';
    } else if (props.user === 'student') {
      return '16px 16px 2px 16px';
    }
  }};
`;

export const MessageContainer = styled.View<MessageProps>`
  display: flex;
  margin: 12px;
  width: ${Dimensions.get('window').width * 0.9}px;
  flex-direction: column;
  gap: 4px;
  align-items: ${(props) => {
    if (props.user === 'professor') {
      return 'flex-start';
    } else if (props.user === 'student') {
      return 'flex-end';
    }
  }};
`;

export const TextBubbleContainer = styled.View<MessageProps>`
  display: flex;
  padding: 12px 18px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: flex-start;
  background-color: ${(props) => {
    if (props.user === 'professor') {
      return props.theme.primary800;
    } else if (props.user === 'student') {
      return props.theme.primary200;
    }
  }};
  border-radius: ${(props) => {
    if (props.user === 'professor') {
      return '16px 16px 16px 2px';
    } else if (props.user === 'student') {
      return '16px 16px 2px 16px';
    }
  }};
`;

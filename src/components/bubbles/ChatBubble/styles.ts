import styled, { css as styledComponent } from 'styled-components/native';
import { MessageContainerProps } from '../../../utils/constants';
import { StyledBox } from '../../styled/styles';

export const StyledImageBubble = styled.Image<MessageContainerProps>`
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

export const MessageContainer = styled(StyledBox)<MessageContainerProps>`
  display: flex;
  margin: 4px 0;
  width: 100%;
  flex-direction: column;
  align-items: ${(props) => {
    if (props.user === 'professor') {
      return 'flex-start';
    } else if (props.user === 'student') {
      return 'flex-end';
    }
  }};
  ${({ css }) => css && styledComponent(css)};
`;

export const TextBubbleContainer = styled(StyledBox)<MessageContainerProps>`
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

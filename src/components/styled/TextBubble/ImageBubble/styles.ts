import styled from 'styled-components/native';
import { MessageProps } from '../../../../utils/constants';

export const ImageBubble = styled.Image<MessageProps>`
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

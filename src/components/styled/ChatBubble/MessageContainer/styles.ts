import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { MessageProps } from '../../../../utils/constants';

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

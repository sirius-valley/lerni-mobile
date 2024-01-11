import styled from 'styled-components/native';
import { MessageProps } from '../../../../utils/constants';

export const AvatarContainer = styled.View<MessageProps>`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  background: ${(props) => {
    if (props.user === 'student') {
      return props.theme.primary200;
    } else if (props.user === 'professor') {
      return props.theme.primary800;
    }
  }};
`;

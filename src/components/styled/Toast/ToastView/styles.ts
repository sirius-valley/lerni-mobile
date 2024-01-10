import { Dimensions } from 'react-native';
import { ToastProps } from 'react-native-toast-message';
import styled from 'styled-components/native';

export const ToastContainer = styled.View<ToastProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  width: ${Dimensions.get('window').width * 0.9}px;
  padding: 12px 18px;
  gap: 16px;
  background-color: ${(props) => {
    if (props.type === 'success') {
      return props.theme.success;
    } else if (props.type === 'error') {
      return props.theme.error;
    } else if (props.type === 'info') {
      return props.theme.primary700;
    }
  }};
`;

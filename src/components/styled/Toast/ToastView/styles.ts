import { ToastProps } from 'react-native-toast-message';
import styled from 'styled-components/native';

export const ToastContainer = styled.View<ToastProps>`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;
    borderRadius: 8px;
    width: auto;
    padding: 12px 18px;
    gap: 16px;
    alignItems: center;
    backgroundColor: ${(props) => {
        if (props.type === "success") {
            return props.theme.success;
        } else if (props.type === "error") {
            return props.theme.error;
        } else if (props.type === "info") {
            return props.theme.primary700;
        }
    }};
`;
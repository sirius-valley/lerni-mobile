import styled from 'styled-components/native';

export const ToastText = styled.Text`
gap: 16px;
fontFamily: ${props => props.theme.body2.fontFamily};
fontSize: ${props => props.theme.body2.fontSize};
fontWeight: ${props => props. theme.body2.fontWeight};
color: ${props => props.theme.white};
`;
import styled from 'styled-components/native';

export const ToastText = styled.Text`
  gap: 16px;
  fontfamily: ${(props) => props.theme.body2.fontFamily};
  fontsize: ${(props) => props.theme.body2.fontSize};
  fontweight: ${(props) => props.theme.body2.fontWeight};
  color: ${(props) => props.theme.white};
`;

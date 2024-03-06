import styled from 'styled-components/native';

export const StyledVersusContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.primary700};
`;

export const VersusRightContainer = styled.View`
 position: relative; 
 top: 0;
 right: 0;
 width: 100%;
 height: 100%; 
 background-color: ${(props) => props.theme.red500};
 transform: rotate(45deg);
 justify-content: center;
 align-items: center;
`;

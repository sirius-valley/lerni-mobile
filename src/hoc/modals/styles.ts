import styled from 'styled-components/native';
import { StyledColumn } from '../../components/styled/styles';

export const StyledModal = styled(StyledColumn)`
  width: 342px;
  align-items: center;
  padding: 24px;
  gap: 16px;
  background-color: ${(props) => props.theme.primary700};
  border-radius: 8px;
  border: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.primary650};
`;

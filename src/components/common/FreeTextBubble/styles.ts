import styled from 'styled-components/native';
import { StyledColumn, StyledRow } from '../../styled/styles';

export const StyledFreeTextContainer = styled(StyledRow)`
  border-color: ${({ theme }) => theme.primary500};
  height: auto;
  width: 100%;
  border-width: 1px;
  border-radius: 8px;
  padding: 8px 8px 8px 8px;
  gap: 10px;
  background-color: ${({ theme }) => theme.white};
`;

export const StyledRightColumn = styled(StyledColumn)`
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

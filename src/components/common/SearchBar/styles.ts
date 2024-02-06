import styled from 'styled-components/native';
import { StyledRow } from '../../styled/styles';

export const StyledSearchBarBox = styled(StyledRow)`
  gap: 8px;
  padding: 0px 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.gray500};
  border-style: solid;
  border-radius: 8px;
  width: 80%;
  height: 33px;
  justify-content: space-between;
`;

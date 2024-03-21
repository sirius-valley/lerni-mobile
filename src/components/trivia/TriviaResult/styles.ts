import styled from 'styled-components/native';
import { StyledColumn } from '../../styled/styles';

export const TriviaResultContainer = styled(StyledColumn)`
  flex: 1;
  border-radius: 20px;
  border: ${({ theme }) => '1px solid ' + theme.primary600};
  background: rgba(1, 42, 54, 0.7);
  margin-top: 80px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 36px;
  overflow: hidden;
`;

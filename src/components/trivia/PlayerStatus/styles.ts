import styled from 'styled-components/native';
import { StyledBox } from '../../styled/styles';
import { theme } from '../../../utils/theme';

export const StyledCircle = styled(StyledBox)`
  background-color: ${({ theme }) => theme.primary800};
  border-radius: 50px;
`;

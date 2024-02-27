import styled from 'styled-components';
import { StyledPropertiesInterface, StyledRow } from '../../styled/styles';

interface StyledLeaderboardRowContainerInterface extends StyledPropertiesInterface {
  belongsToOwner: boolean;
}

export const StyledLeaderboardRowContainer = styled(
  StyledRow,
)<StyledLeaderboardRowContainerInterface>`
  gap: 8px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ belongsToOwner, theme }) =>
    belongsToOwner ? theme.primary800 : theme.primary900};
`;

import React from 'react';
import { StyledRow, StyledText } from '../../styled/styles';
import StarBox from '../../../../assets/icons/StarBoxIcon';
import { Avatar } from '../../common/Avatar';
import RhombusIcon from '../../../../assets/icons/RhombusIcon';
import { StyledLeaderboardRowContainer } from './styles';

interface LeaderboardRowInterface {
  imgUrl?: string;
  fullName: string;
  points: number;
  belongsToCurrentUser?: boolean;
}

const LeaderboardRow = ({
  imgUrl,
  fullName,
  points,
  belongsToCurrentUser = false,
}: LeaderboardRowInterface) => {
  return (
    <StyledLeaderboardRowContainer belongsToOwner={belongsToCurrentUser}>
      <StarBox />
      <Avatar uri={imgUrl ? imgUrl : undefined} size={48} />
      <StyledText css={{ width: '52%' }} color="gray100" variant="body1">
        {fullName}
      </StyledText>
      <StyledRow css={{ gap: '4px' }}>
        <RhombusIcon />
        <StyledText color="gray100" variant="body3">
          {points} {points === 1 ? 'punto' : 'puntos'}
        </StyledText>
      </StyledRow>
    </StyledLeaderboardRowContainer>
  );
};

export default LeaderboardRow;

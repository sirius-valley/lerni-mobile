import React from 'react';
import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import StarBox from '../../../../assets/icons/StarBoxIcon';
import { Avatar } from '../../common/Avatar';
import RhombusIcon from '../../../../assets/icons/RhombusIcon';
import { StyledLeaderboardRowContainer } from './styles';
import { useTheme } from 'styled-components/native';

interface LeaderboardRowInterface {
  imgUrl?: string;
  fullName: string;
  position: number;
  points: number;
  belongsToCurrentUser?: boolean;
}

const LeaderboardRow = ({
  imgUrl,
  fullName,
  position,
  points,
  belongsToCurrentUser = false,
}: LeaderboardRowInterface) => {
  const theme = useTheme();
  return (
    <StyledLeaderboardRowContainer belongsToOwner={belongsToCurrentUser}>
      <StyledRow css={{gap: 8, alignItems: 'center', justifyContent: 'flex-start'}}>
        <StyledBox css={{justifyContent: 'center', padddingVertical: 11, paddingHorizontal: 8}} >
          <StyledText variant='h2' style={{color: theme.gray100}}>{position}</StyledText>
        </StyledBox>
        <Avatar uri={imgUrl ? imgUrl : undefined} size={48} />
        <StyledText variant="h3" color="gray100" css={{ width: '52%', fontSize: '14px' }}>
          {fullName}
        </StyledText>
      </StyledRow>
      <StyledRow css={{ gap: '4px', width: '50px', height: '14px', alignItems: 'center', justifyContent: 'center' }}>
        <RhombusIcon size={12} />
        <StyledText color="gray100" variant="body3">
          {points}
        </StyledText>
      </StyledRow>
    </StyledLeaderboardRowContainer>
  );
};

export default LeaderboardRow;

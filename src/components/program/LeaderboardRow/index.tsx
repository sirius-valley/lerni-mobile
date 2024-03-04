import React from 'react';
import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import Avatar from '../../common/Avatar';
import RhombusIcon from '../../../../assets/icons/RhombusIcon';
import { StyledLeaderboardRowContainer } from './styles';
import { useTheme } from 'styled-components/native';
import { useMeQuery } from '../../../redux/service/student.service';

interface LeaderboardRowInterface {
  studentId: string;
  profileImage?: string;
  fullName: string;
  rank: number;
  points: number;
}

const LeaderboardRow = ({
  studentId,
  profileImage,
  fullName,
  rank,
  points,
}: LeaderboardRowInterface) => {
  const theme = useTheme();
  const { data: me } = useMeQuery();
  return (
    <StyledLeaderboardRowContainer belongsToOwner={studentId === me?.id}>
      <StyledRow css={{ gap: 8, alignItems: 'center', justifyContent: 'flex-start', width: '83%' }}>
        <StyledBox css={{ justifyContent: 'center', padddingVertical: 11, paddingHorizontal: 8 }}>
          <StyledText variant="h2" style={{ color: theme.gray100 }}>
            {rank}
          </StyledText>
        </StyledBox>
        <Avatar uri={profileImage} size={48} />
        <StyledText variant="h3" color="gray100" css={{ width: '52%', fontSize: '14px' }}>
          {fullName}
        </StyledText>
      </StyledRow>
      <StyledRow
        css={{
          gap: '4px',
          width: '50px',
          height: '14px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <RhombusIcon size={12} />
        <StyledText color="gray100" variant="body3">
          {points}
        </StyledText>
      </StyledRow>
    </StyledLeaderboardRowContainer>
  );
};

export default LeaderboardRow;

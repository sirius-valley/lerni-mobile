import { ProgramResponseType } from '../../../../../../../redux/service/types/program.response';
import { StyledColumn, StyledRow, StyledText } from '../../../../../../../components/styled/styles';
import { mockedLeaderboardRows } from '../../../utils';
import React from 'react';
import LeaderboardRow from '../../../../../../../components/program/LeaderboardRow';
import { ThreeDots } from '../../../../../../../components/program/LeaderboardRow/ThreeDots';
import { useTheme } from 'styled-components';

interface LeaderboardSectionProps {
  leaderboard: ProgramResponseType['leaderBoard'];
}

const LeaderboardSection = ({ leaderboard }: LeaderboardSectionProps) => {
  const theme = useTheme();
  return (
    <StyledColumn css={{ width: '100%', marginVertical: '16px' }}>
      <StyledRow css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledText variant="h3" color="white" css={{ marginBottom: '16px' }}>
          Leaderboard
        </StyledText>
        <StyledText
          variant="body3"
          color="white"
          css={{
            textDecoration: 'underline',
            marginBottom: '16px',
            textDecorationColor: theme.white,
          }}
        >
          Ver todo
        </StyledText>
      </StyledRow>
      {mockedLeaderboardRows.map((row, idx) => (
        <React.Fragment key={idx}>
          <LeaderboardRow {...row} />
          {idx === 0 && mockedLeaderboardRows[idx + 1].position > row.position + 1 && <ThreeDots />}
        </React.Fragment>
      ))}
    </StyledColumn>
  );
};

export default LeaderboardSection;

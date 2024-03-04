import { ProgramResponseType } from '../../../../../../../redux/service/types/program.response';
import { StyledColumn, StyledRow, StyledText } from '../../../../../../../components/styled/styles';
import React from 'react';
import LeaderboardRow from '../../../../../../../components/program/LeaderboardRow';
import { useTheme } from 'styled-components';
import { Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

interface LeaderboardSectionProps {
  leaderboard: ProgramResponseType['leaderBoard'];
}

const LeaderboardSection = ({ leaderboard }: LeaderboardSectionProps) => {
  const { id } = useLocalSearchParams();

  const theme = useTheme();
  const router = useRouter();
  return (
    <StyledColumn css={{ width: '100%', marginVertical: '16px' }}>
      <StyledRow css={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledText variant="h3" color="white" css={{ marginBottom: '16px' }}>
          Leaderboard
        </StyledText>
        <Pressable onPress={() => router.push(`/(auth)/(tabs)/explore/leaderboard/${id}`)}>
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
        </Pressable>
      </StyledRow>
      {leaderboard.up.map((props, idx) => (
        <LeaderboardRow {...props} key={props.studentId + '-leaderboard'} />
        /*
            fullName: "John Doe"
            id: "5eeb2d83-b23c-4df3-94ef-bc25128e1000"
            points: 10
            profileImage: null
            rank: 1
            studentId: "studentId"
           */

        //   <React.Fragment key={idx}>
        //   {idx === 0 && mockedLeaderboardRows[idx + 1].position > row.position + 1 && <ThreeDots />}
        // </React.Fragment>
      ))}
      {leaderboard.up.length === 0 && leaderboard.down.length === 0 && (
        <StyledColumn css={{ width: '100%', alignItems: 'center', padding: 24 }}>
          <StyledText variant={'body3'} color={'gray600'} css={{ textAlign: 'center' }}>
            {`Nada aún. \n ¿Querés liderar la tabla?`}
          </StyledText>
        </StyledColumn>
      )}
    </StyledColumn>
  );
};

export default LeaderboardSection;

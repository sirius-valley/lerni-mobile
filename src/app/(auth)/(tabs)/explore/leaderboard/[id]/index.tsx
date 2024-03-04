import { useLocalSearchParams, useRouter } from 'expo-router';
import { useLeaderboardQuery } from '../../../../../../redux/service/program.service';
import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { StyledColumn, StyledText } from '../../../../../../components/styled/styles';
import { Header } from '../../../../../../components/common/header';
import LeaderboardRow from '../../../../../../components/program/LeaderboardRow';

const Leaderboard = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: leaderboard } = useLeaderboardQuery(id as string);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleOnPress = () => {
    router.back();
  };

  return (
    <StyledColumn
      css={{ gap: 16, marginBottom: 60, width: '100%', height: '100%', paddingTop: 20 }}
    >
      <Header title="Comentarios" onPress={handleOnPress} />
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
          }, 250);
        }}
        scrollIndicatorInsets={{ right: -30 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {leaderboard?.map((student) => (
          <LeaderboardRow
            fullName={student.fullName}
            studentId={student.studentId}
            points={student.points}
            profileImage={student.profileImage}
            rank={student.rank}
            key={student.studentId + '-leaderboard'}
          />
        ))}

        {leaderboard?.length === 0 && (
          <StyledColumn
            css={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <StyledText variant={'body2'} color={'gray600'} css={{ textAlign: 'center' }}>
              {`No hay ningun estudiante \n en el leaderboard`}
            </StyledText>
          </StyledColumn>
        )}
      </ScrollView>
    </StyledColumn>
  );
};

export default Leaderboard;

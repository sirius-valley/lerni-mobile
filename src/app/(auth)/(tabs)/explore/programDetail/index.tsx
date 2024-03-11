import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyledColumn, StyledRow, StyledText } from '../../../../../components/styled/styles';
import { Pressable, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import RhombusIcon from '../../../../../../assets/icons/RhombusIcon';
import ClockIcon from '../../../../../../assets/icons/ClockIcon';
import MessageIcon from '../../../../../../assets/icons/MessageIcon';
import { useProgramByIdQuery } from '../../../../../redux/service/program.service';
import ProgramSkeleton from './ProgramSkeleton';
import ErrorDisplay from '../../../../../components/common/ErrorDisplay';
import { ProgramResponseType } from '../../../../../redux/service/types/program.response';
import PillsSection from './components/PillsSection';
import LeaderboardSection from './components/LeaderboardSection';
import HeaderProgram from './components/HeaderProgram';
import Avatar from '../../../../../components/common/Avatar';
import PillIcon from '../../../../../../assets/icons/PillIcon';

const ProgramDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const {
    data: program,
    isLoading,
    isError,
  } = useProgramByIdQuery(id) as {
    data: ProgramResponseType;
    isLoading: boolean;
    isError: boolean;
  };

  if (isLoading) {
    return <ProgramSkeleton />;
  }

  if (isError) {
    return <ErrorDisplay type="404" />;
  }

  const getNextPillOrQuestionnaireId = (
    pills: ProgramResponseType['pills'],
    questionnaire: ProgramResponseType['questionnaire'],
  ): {
    type: 'questionnaire' | 'pill';
    id: string;
  } => {
    const nextPill = pills.find((pill) => pill.pillProgress !== 100);
    if (nextPill) {
      return { type: 'pill', id: nextPill.id };
    }
    return { type: 'questionnaire', id: questionnaire.id };
  };

  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
      <HeaderProgram
        imgURL={program.icon}
        progress={program.progress}
        nextPillId={
          program.progress !== 100
            ? getNextPillOrQuestionnaireId(program.pills, program.questionnaire)
            : undefined
        }
      />
      <StyledColumn
        css={{
          flex: 1,
          justifyContent: 'flex-start',
          height: '100%',
          paddingBottom: 120,
          paddingHorizontal: 24,
          width: '100%',
          alignItems: 'center',
          gap: 32,
        }}
      >
        <StyledColumn css={{ gap: 8, marginTop: 40, width: '100%' }}>
          <StyledText variant="h1" color="gray100">
            {program.programName}
          </StyledText>
          <StyledRow css={{ gap: 6 }}>
            <Avatar size={20} uri={program.teacher.image} />
            <StyledText variant="body1" color="gray400">
              {program.teacher.lastname} {program.teacher.name}
            </StyledText>
          </StyledRow>
        </StyledColumn>

        <StyledColumn
          css={{ gap: 16, marginTop: '16px', justifyContent: 'flex-start', width: '100%' }}
        >
          <StyledRow css={{ width: '90%', gap: 32 }}>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <PillIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="white">
                {program.pillCount} {program.pillCount > 1 ? 'píldoras' : 'píldora'}
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <ClockIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="white">
                {program.estimatedHours} {program.estimatedHours > 1 ? 'horas' : 'hora'}
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <RhombusIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="white">
                {program.points} puntos
              </StyledText>
            </StyledRow>
          </StyledRow>
          <StyledText variant="body1" color="gray100">
            {program.programDescription}
          </StyledText>
        </StyledColumn>

        <PillsSection pills={program.pills} questionnaire={program.questionnaire} />

        <LeaderboardSection leaderboard={program.leaderBoard} />

        <StyledColumn
          css={{
            marginTop: '8px',
            marginBottom: '48px',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <MessageIcon size={24} />

          <Pressable onPress={() => router.push(`/explore/comments/${id}`)}>
            <StyledText
              variant="body2"
              color="primary500"
              css={{ textDecorationLine: 'underline' }}
            >
              Ver comentarios sobre el programa
            </StyledText>
          </Pressable>
        </StyledColumn>
      </StyledColumn>
    </ScrollView>
  );
};

export default ProgramDetail;

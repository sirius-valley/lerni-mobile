import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
  StyledBox,
  StyledColumn,
  StyledLine,
  StyledRow,
  StyledText,
} from '../../../../../components/styled/styles';
import BackArrow from '../../../../../../assets/icons/BackArrow';
import { Pressable, ScrollView } from 'react-native';
import ProgramImage from '../../../../../components/program/ProgramImage';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';
import RhombusIcon from '../../../../../../assets/icons/RhombusIcon';
import BulletListIcon from '../../../../../../assets/icons/BulletListIcon';
import ClockIcon from '../../../../../../assets/icons/ClockIcon';
import PillRow from '../../../../../components/program/PillRow';
import { mockedLeaderboardRows, mockedPills, Status } from '../utils';
import LeaderboardRow from '../../../../../components/program/LeaderboardRow';
import MessageIcon from '../../../../../../assets/icons/MessageIcon';
import { useProgramByIdQuery } from '../../../../../redux/service/program.service';
import ProgramSkeleton from './ProgramSkeleton';
import { ThreeDots } from '../../../../../components/program/LeaderboardRow/ThreeDots';
import ErrorDisplay from '../../../../../components/common/ErrorDisplay';

interface ProgramDetailType {
  id: string;
  programName: string;
  teacher: {
    id: string;
    name: string;
    lastname: string;
    profession: string;
    image: string;
  };
  progress: number;
  pillCount: number;
  icon: string;
  estimatedHours: number;
  points: number;
  programDescription: string;
  programObjectives: string[];
  pills: [
    {
      id: string;
      pillName: string;
      pillProgress: number;
      completionTimeMinutes: number;
      isLocked: boolean;
    },
  ];
  questionnaire: {
    id: string;
    questionnaireName: string;
    completionTimeMinutes: number;
    questionnaireProgress: number;
    isLocked: boolean;
  };
}

const ProgramDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const {
    data: program,
    isLoading,
    isError,
  } = useProgramByIdQuery(id) as {
    data: ProgramDetailType;
    isLoading: boolean;
    isError: boolean;
  };

  if (isLoading) {
    return <ProgramSkeleton />;
  }

  if (isError) {
    return <ErrorDisplay type="404" />;
  }

  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
      <StyledColumn
        css={{ flex: 1, justifyContent: 'flex-start', height: '100%', paddingBottom: '12px' }}
      >
        <StyledRow>
          <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
            <BackArrow />
          </Pressable>
        </StyledRow>
        <StyledColumn css={{ width: '100%', alignItems: 'center', gap: '8px' }}>
          <ProgramImage
            status={program.progress > 0 ? 'in_progress' : 'not_started'}
            imgUrl={program.icon}
            size={150}
          />
          <StyledText variant="h2" color="gray100">
            {program.programName}
          </StyledText>
          <StyledText variant="body1" color="gray400">
            {program.teacher.lastname}, {program.teacher.name}
          </StyledText>
          <StyledBox css={{ width: '90%' }}>
            <Progress.Bar
              unfilledColor={theme.gray600}
              color={theme.primary400}
              height={8}
              progress={program.progress}
              borderWidth={0}
              width={null}
              borderRadius={20}
            />
          </StyledBox>

          <StyledRow css={{ justifyContent: 'space-evenly', width: '90%', gap: 32 }}>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <BulletListIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="gray400">
                {program.pillCount} {program.pillCount > 1 ? 'píldoras' : 'píldora'}
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <ClockIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="gray400">
                {program.estimatedHours} {program.estimatedHours > 1 ? 'horas' : 'hora'}
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <RhombusIcon size={14} color={theme.primary500} />
              <StyledText variant="body3" color="gray400">
                {program.points} puntos
              </StyledText>
            </StyledRow>
          </StyledRow>

          <StyledColumn
            css={{ gap: '8px', marginTop: '16px', justifyContent: 'flex-start', width: '100%' }}
          >
            <StyledText variant="h3" color="gray100">
              Descripcion del programa
            </StyledText>
            <StyledText variant="body1" color="gray100">
              {program.programDescription}
            </StyledText>
          </StyledColumn>

          <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
            <StyledText color="gray100" variant="h3">
              Pildoras
            </StyledText>
            {program.pills?.map((pill, idx) => (
              <StyledBox key={idx}>
                <PillRow
                  pillName={pill.pillName}
                  pillProgress={pill.pillProgress}
                  pillNumber={idx + 1}
                  duration={pill.completionTimeMinutes}
                  isLocked={pill.isLocked}
                />
              </StyledBox>
            ))}
            <PillRow
              pillName={program.questionnaire.questionnaireName}
              pillProgress={program.questionnaire.questionnaireProgress}
              pillNumber={program.pills.length + 1}
              duration={program.questionnaire.completionTimeMinutes}
              isLocked={program.questionnaire.isLocked}
            />
          </StyledColumn>

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
                {idx === 0 && mockedLeaderboardRows[idx + 1].position > row.position + 1 && (
                  <ThreeDots />
                )}
              </React.Fragment>
            ))}
          </StyledColumn>

          <StyledColumn
            css={{
              marginTop: '8px',
              marginBottom: '48px',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <MessageIcon size={24} />

            <Pressable onPress={() => router.push('/explore/comments')}>
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
      </StyledColumn>
    </ScrollView>
  );
};

export default ProgramDetail;

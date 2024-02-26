import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  StyledBox,
  StyledColumn,
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
import { inProgressMockedData, MockedDataItem } from '..';
import { ThreeDots } from '../../../../../components/program/LeaderboardRow/ThreeDots';

const ProgramDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const programs = inProgressMockedData;
  const [program, setProgram] = useState<MockedDataItem | undefined>(undefined);
  const theme = useTheme();

  useEffect(() => {
    setProgram(programs.find((mappedProgram) => mappedProgram.id === id));
  }, [id]);

  const mockedProgram = {
    id: program?.id,
    title: program?.title,
    imgUrl: program?.imgUrl ? program?.imgUrl : 'https://reactnative.dev/img/logo-og.png',
    status: 'in_progress' as Status,
    progress: program?.progress,
    pillData: {
      pillProgress: program?.progress,
      pillAmount: 5,
      pillDuration: 1,
      pillPoints: 24,
    },
  };

  const mockedSubTitle = [
    {
      icon: <BulletListIcon />,
      label: `${mockedProgram.pillData.pillAmount} pildoras`,
    },
    {
      icon: <ClockIcon />,
      label: `${mockedProgram.pillData.pillDuration} hora`,
    },
    {
      icon: <RhombusIcon />,
      label: `${mockedProgram.pillData.pillDuration} puntos`,
    },
  ];

  return (
    <ScrollView style={{ width: '100%' }} scrollIndicatorInsets={{ right: -30 }}>
      <StyledColumn
        css={{ flex: 1, justifyContent: 'flex-start', height: '100%', paddingBottom: '64px' }}
      >
        <StyledRow>
          <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
            <BackArrow />
          </Pressable>
        </StyledRow>
        <StyledColumn css={{ width: '100%', alignItems: 'center', gap: '8px' }}>
          <ProgramImage status={mockedProgram.status} imgUrl={mockedProgram.imgUrl} size={150} />
          <StyledText variant="h2" color="gray100">
            {mockedProgram.title}
          </StyledText>
          <StyledText variant="body1" color="gray400">
            Profesor/Autor
          </StyledText>
          <StyledBox css={{ width: '90%' }}>
            <Progress.Bar
              unfilledColor={theme.gray600}
              color={theme.primary400}
              height={8}
              progress={mockedProgram.pillData.pillProgress}
              borderWidth={0}
              width={null}
              borderRadius={20}
            />
          </StyledBox>

          <StyledRow css={{ justifyContent: 'space-evenly', width: '90%' }}>
            {mockedSubTitle.map((subTitle, idx) => (
              <StyledRow key={idx} css={{ gap: '4px', alignItems: 'center' }}>
                {subTitle.icon}
                <StyledText variant="body3" color="gray400">
                  {subTitle.label}
                </StyledText>
              </StyledRow>
            ))}
          </StyledRow>

          <StyledColumn css={{ gap: '8px', marginTop: '16px' }}>
            <StyledText variant="h3" color="gray100">
              Descripcion del programa
            </StyledText>
            <StyledText variant="body1" color="gray100">
              Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              ullamcorper mauris, vitae commodo dui efficitur non. Fusce efficitur pulvinar diam vel
              dictum.
            </StyledText>
          </StyledColumn>

          <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
            <StyledText color="gray100" variant="h3">
              Pildoras
            </StyledText>

            {mockedPills.map((pill, idx) => (
              <PillRow {...pill} key={idx} />
            ))}
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
            <LeaderboardRow {...mockedLeaderboardRows[0]} />
            <ThreeDots />
            <LeaderboardRow {...mockedLeaderboardRows[1]} />
            <LeaderboardRow {...mockedLeaderboardRows[2]} />
            <LeaderboardRow {...mockedLeaderboardRows[3]} />
            {/* {mockedLeaderboardRows.map((row, idx) => (
              <LeaderboardRow {...row} key={idx} />
            ))} */}
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

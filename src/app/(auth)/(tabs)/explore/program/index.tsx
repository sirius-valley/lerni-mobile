import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import {
  StyledBox,
  StyledColumn,
  StyledLine,
  StyledRow,
  StyledText,
} from '../../../../../components/styled/styles';
import BackArrow from '../../../../../../assets/icons/BackArrow';
import { Pressable, ScrollView } from 'react-native';
import ProgramImage, { ProgramStatus } from '../../../../../components/program/ProgramImage';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components';
import RhombusIcon from '../../../../../../assets/icons/RhombusIcon';
import BulletListIcon from '../../../../../../assets/icons/BulletListIcon';
import ClockIcon from '../../../../../../assets/icons/ClockIcon';
import CheckSealIcon from '../../../../../../assets/icons/CheckSealIcon';
import PillRow from '../../../../../components/program/PillRow';
import { mockedPills } from '../utils';

const Program = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const mockedProgram = {
    id: Array.isArray(id) ? '' : id ?? '',
    title: Array.isArray(id) ? 'Programa 1' : id ?? '',
    // title: 'Programa 1',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    status: 'in_progress' as ProgramStatus,
    progress: 0.32,
    pillData: {
      pillProgress: 0.32,
      pillAmount: 5,
      pillDuration: 1,
      pillPoints: 24,
    },
  };

  return (
    <ScrollView style={{ width: '100%', paddingHorizontal: 12 }}>
      <StyledColumn css={{ flex: 1, justifyContent: 'flex-start', height: '100%' }}>
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
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <BulletListIcon />
              <StyledText variant="body3" color="gray400">
                {mockedProgram.pillData.pillAmount} pildoras
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <ClockIcon />
              <StyledText variant="body3" color="gray400">
                {mockedProgram.pillData.pillDuration} hora
              </StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '4px', alignItems: 'center' }}>
              <RhombusIcon />
              <StyledText variant="body3" color="gray400">
                {mockedProgram.pillData.pillDuration} puntos
              </StyledText>
            </StyledRow>
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
            <StyledRow css={{ gap: '8px' }}>
              <CheckSealIcon />
              <StyledText color="gray100">Tema 1</StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '8px' }}>
              <CheckSealIcon />
              <StyledText color="gray100">Tema 2</StyledText>
            </StyledRow>
            <StyledRow css={{ gap: '8px' }}>
              <CheckSealIcon />
              <StyledText color="gray100">Tema 3</StyledText>
            </StyledRow>
          </StyledColumn>

          <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
            <StyledText color="gray100" variant="h3">
              Pildoras
            </StyledText>
            {mockedPills.map((pill, idx) => (
              <StyledBox key={idx}>
                <PillRow {...pill} />
                <StyledLine css={{ marginTop: '8px' }} color="gray500" />
              </StyledBox>
            ))}
          </StyledColumn>

          <StyledColumn>
            <StyledText variant="h3">Leaderboard</StyledText>
          </StyledColumn>
        </StyledColumn>
      </StyledColumn>
    </ScrollView>
  );
};

export default Program;

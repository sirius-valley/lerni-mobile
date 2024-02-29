import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Program } from '../../../redux/service/types/program.response';
import { Status } from '../../../app/(auth)/(tabs)/explore/utils';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import ProgramCard from '../../program/ProgramCard';
import { useRouter } from 'expo-router';

interface ExploreRowProps {
  programs: Program[];
  status: Status;
  hasIntroduction: boolean;
  title: string;
}

const ExploreRow = ({ programs, status, hasIntroduction, title }: ExploreRowProps) => {
  const router = useRouter();
  const theme = useTheme();

  const handleGoToProgram = (id: string) =>
    router.push({
      pathname: '(tabs)/explore/programDetail',
      params: {
        id,
      },
    });

  return (
    <StyledColumn css={{ gap: 8 }}>
      <StyledRow
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledText variant="h3" css={{ color: theme.gray100 }}>
          {title}
        </StyledText>
        {programs.length > 3 && (
          <Pressable onPress={() => alert('Ver más ')}>
            <StyledText
              css={{
                color: theme.gray300,
                textDecorationLine: 'underline',
              }}
            >
              {'Ver más'}
            </StyledText>
          </Pressable>
        )}
      </StyledRow>
      {!programs.length && status === 'not_started' ? (
        <StyledBox css={{ padding: '32px 0px', justifyContent: 'center', alignItems: 'center' }}>
          <StyledText variant="body2" color="primary200">
            {'Aún no tienes programas asignados'}
          </StyledText>
        </StyledBox>
      ) : (
        <StyledRow css={{ gap: 8, justifyContent: 'space-between' }}>
          {programs.slice(0, 3).map(({ id, name, icon, progress }) => (
            <ProgramCard
              key={id}
              onPress={hasIntroduction ? () => handleGoToProgram(id) : () => null}
              id={id}
              title={name}
              imgUrl={
                'https://img.freepik.com/vector-premium/estetoscopio-icono-moderno-fondo-verde-estilo-plano-urgencia-larga-sombra-ilustracion-vectorial_494516-895.jpg?w=2000'
              }
              status={!hasIntroduction ? 'locked' : status}
              transparentOnLocked={!hasIntroduction ? true : false}
              progress={progress}
            />
          ))}
        </StyledRow>
      )}
    </StyledColumn>
  );
};

export default ExploreRow;

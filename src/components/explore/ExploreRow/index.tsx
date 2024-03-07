import { Pressable } from 'react-native';
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

  const handleGoToIntroductionPill = () => router.push('/(auth)/pill/introduction');

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
        {programs.length > 3 ||
          (!hasIntroduction && programs.length > 2 && (
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
          ))}
      </StyledRow>
      {!programs.length && status === 'not_started' && hasIntroduction ? (
        <StyledBox css={{ padding: '32px 0px', justifyContent: 'center', alignItems: 'center' }}>
          <StyledText variant="body2" color="primary700">
            {'Aún no tienes programas asignados'}
          </StyledText>
        </StyledBox>
      ) : (
        <StyledRow
          css={{
            gap: 8,
            width: '100%',
            justifyContent: programs.length > 2 ? 'space-between' : 'flex-start',
          }}
        >
          {!hasIntroduction ? (
            <ProgramCard
              id={'introduction'}
              title={'Introducción a la plataforma'}
              imgUrl={'https://lerni-images-2024.s3.amazonaws.com/introduction_image.png'}
              status={'not_started'}
              onPress={handleGoToIntroductionPill}
            />
          ) : null}
          {programs.slice(0, hasIntroduction ? 3 : 2).map(({ id, name, icon, progress }) => (
            <ProgramCard
              key={id}
              onPress={hasIntroduction ? () => handleGoToProgram(id) : () => null}
              id={id}
              title={name}
              imgUrl={icon}
              status={!hasIntroduction ? 'locked' : status}
              transparentOnLocked={!hasIntroduction ? true : false}
              progress={progress / 100}
            />
          ))}
        </StyledRow>
      )}
    </StyledColumn>
  );
};

export default ExploreRow;

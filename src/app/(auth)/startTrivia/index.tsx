import { useLocalSearchParams, useRouter } from 'expo-router';
import { rgba } from 'polished';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';
import { TriviaRadialBackground } from '../../../../assets/TriviaRadialBackground';
import BackArrow from '../../../../assets/icons/BackArrow';
import { TriviaLoaderIcon } from '../../../../assets/icons/TriviaLoaderIcon';
import ErrorDisplay from '../../../components/common/ErrorDisplay';
import Button from '../../../components/styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../components/styled/styles';
import { Participant } from '../../../components/trivia/LoadingVersus/Participant';
import { RandomParticipant } from '../../../components/trivia/LoadingVersus/RandomParticipant';
import { useProgramByIdQuery } from '../../../redux/service/program.service';
import { useMeQuery } from '../../../redux/service/student.service';
import { useLazyAssignTriviaQuery } from '../../../redux/service/trivia.service';

const StartTrivia = () => {
  const [fetch, { isLoading }] = useLazyAssignTriviaQuery();
  const { programId } = useLocalSearchParams();
  const { data: user, isLoading: meLoading } = useMeQuery();
  const { data: program, isLoading: programLoading } = useProgramByIdQuery(programId);
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const router = useRouter();

  const onPress = () => {
    setLoading(true);
    fetch({ programId: programId as string });
    if (!isLoading) {
      router.push('/(auth)/startTrivia/loading');
    }
    setLoading(false);
  };

  if (meLoading || !user) {
    return <ErrorDisplay type="404" />;
  }

  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        paddingTop: 60,
        paddingBottom: 120,
        paddingHorizontal: 24,
      }}
    >
      <TriviaRadialBackground />
      <StyledColumn css={{ gap: 32 }}>
        <StyledRow css={{ width: '100%', justifyContent: 'left', alignItems: 'center' }}>
          <Pressable onPress={() => router.back()}>
            <BackArrow color={theme.gray400} size={24} />
          </Pressable>
        </StyledRow>
        <StyledColumn css={{ justifyContent: 'center', alignItems: 'center', gap: 8 }}>
          <StyledText
            variant="h1"
            css={{ color: theme.gray100, alignContent: 'center', justifyContent: 'center' }}
          >
            {'  Bienvenidos a esta trivia sobre'}
          </StyledText>
          <StyledText
            variant="h3"
            css={{ color: theme.gray100, fontFamily: 'Roboto-Regular' }}
          >{`"${program?.programName}"`}</StyledText>
        </StyledColumn>
        <StyledRow css={{ justifyContent: 'space-around', padding: '48px 0px', gap: 2 }}>
          <Participant
            name={user.name ?? ''}
            occupation={user.profession ?? user.career ?? user.lastname ?? ''}
          />
          <RandomParticipant name={'Oponente'} occupation={'al azar'} />
        </StyledRow>
        <StyledBox
          css={{
            position: 'absolute',
            top: '35%',
            left: '25%',
            zIndex: -1,
          }}
        >
          <TriviaLoaderIcon color={rgba(theme.primary400, 0.1)} size={140} />
        </StyledBox>
      </StyledColumn>
      <Button loading={loading} onPress={onPress} css={{ width: '85%' }}>
        {'Jugar'}
      </Button>
    </StyledColumn>
  );
};

export default StartTrivia;

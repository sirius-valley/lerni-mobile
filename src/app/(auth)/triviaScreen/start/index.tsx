import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../components/styled/styles';
import BackArrow from '../../../../../assets/icons/BackArrow';
import { useTheme } from 'styled-components/native';
import { Participant } from '../../../../components/trivia/LoadingVersus/Participant';
import Button from '../../../../components/styled/Button';
import { useProgramByIdQuery } from '../../../../redux/service/program.service';
import { Dimensions, Pressable } from 'react-native';
import { useLSelector } from '../../../../redux/hooks';
import { RandomParticipant } from '../../../../components/trivia/LoadingVersus/RandomParticipant';
import { TriviaLoaderIcon } from '../../../../../assets/icons/TriviaLoaderIcon';
import { rgba } from 'polished';
import { useState } from 'react';
import { TriviaRadialBackground } from '../../../../../assets/TriviaRadialBackground';

const StartTrivia = () => {
  const { programId } = useLocalSearchParams();
  // const {data: program, isLoading} = useProgramByIdQuery(programId)
  const program = {
    programName: 'Introducción a la filosofía alemana',
  };
  // const user = useLSelector((state) => state.student);
  const user = {
    name: 'Mono',
    lastname: 'Steve',
    profession: undefined,
    career: 'Medicina',
  };
  const theme = useTheme();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  if (!program) {
    router.back();
  }

  const onPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (!isLoading) {
        router.push('/(auth)/triviaScreen');
      }
      setIsLoading(false);
    }, 2000);
    // const {isLoading} = useGetTriviaById()
  };

  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
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
      <Button loading={isLoading} onPress={onPress} css={{ width: '85%' }}>
        {'Jugar'}
      </Button>
    </StyledColumn>
  );
};

export default StartTrivia;

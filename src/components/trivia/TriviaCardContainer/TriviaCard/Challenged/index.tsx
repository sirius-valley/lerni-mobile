import { useRouter } from 'expo-router';
import Button from '../../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../../styled/styles';
import { Dimensions } from 'react-native';
import { TriviaLoaderIcon } from '../../../../../../assets/icons/TriviaLoaderIcon';
import { Participant } from '../../../LoadingVersus/Participant';
import { rgba } from 'polished';
import { useTheme } from 'styled-components/native';
import { LerniTriviaIcon } from '../../../../../../assets/icons/LerniTriviaIcon';
import { TriviaRadialBackground } from '../../../../../../assets/TriviaCardBackground';
import { TriviaCardProps } from '../types';

const ChallengedCard = ({
  programName,
  user,
  opponent,
  timeLeft,
  status,
  score,
}: TriviaCardProps) => {
  const screenWidth = Dimensions.get('screen').width;
  const baseWidth = 342;
  const baseHeight = 389;
  const scaleFactor = screenWidth / 400;
  const adjustedWidth = baseWidth * scaleFactor;
  const adjustedHeight = baseHeight * scaleFactor;

  const router = useRouter();
  const theme = useTheme();
  return (
    <StyledColumn
      css={{
        width: adjustedWidth,
        height: adjustedHeight,
        padding: '32px 24px 24px 24px',
        gap: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
      }}
    >
      <TriviaRadialBackground />
      <StyledText variant="h4" color="primary400">
        {programName}
      </StyledText>
      <StyledColumn
        css={{
          gap: 6,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText variant="h2" color="white">
          {'Fuiste retado a un duelo'}
        </StyledText>
        <StyledText variant="body2" color="gray100">
          {'Responder esta trivia solo te llevará'}
        </StyledText>
        <StyledText variant="body2" color="gray100" css={{ fontFamily: 'Roboto-Bold' }}>
          {'10 minutos'}
        </StyledText>
      </StyledColumn>
      <StyledRow css={{ justifyContent: 'center', alignItems: 'flex-end' }}>
        <Participant
          size={70}
          textStyles={{ variant: 'body4' }}
          name={user.name}
          lastname={user.lastname}
        />
        <LerniTriviaIcon size={139} color={rgba(theme.gray100, 0.1)} />
        <Participant
          size={70}
          textStyles={{ variant: 'body4' }}
          name={opponent?.name ?? 'Oponente'}
          lastname={opponent?.lastname ?? 'al azar'}
        />
      </StyledRow>
      <StyledText variant="body2" color="white">
        {`Te quedan ${timeLeft ?? '5'}hs`}
      </StyledText>
      {/* En el botón, debería de recibir el id de la partida (por props), y reemplazar el router con el link a esa partida */}
      <Button onPress={() => alert('push to trivia start')} css={{ width: '100%' }}>
        Jugar ahora
      </Button>
    </StyledColumn>
  );
};

export default ChallengedCard;

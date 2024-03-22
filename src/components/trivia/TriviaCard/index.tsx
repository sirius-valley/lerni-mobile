import { useRouter } from 'expo-router';
import Button from '../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';

const TriviaCard = () => {
  const router = useRouter();
  return (
    <StyledBox css={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <StyledColumn
        css={{
          width: '100%',
          height: '100%',
          padding: '32px 24px 24px 24px',
          backgroundColor: 'green',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <StyledText variant="h4" color="primary400">
          {'Nombre del programa'}
        </StyledText>
        <StyledColumn
          css={{
            height: '100%',
            width: '100%',
            gap: 6,
            backgroundColor:'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledText variant="h2" color="white">
            {'Fuiste retado a un duelo'}
          </StyledText>
          <StyledText variant='body2' color='gray100'>{'Responder esta trivia solo te llevar'}</StyledText>
          <StyledText variant='body2' color='gray100' css={{fontFamily: 'Roboto-Bold'}}>{'10 minutos'}</StyledText>
        </StyledColumn>
        <StyledRow css={{}}></StyledRow>
        <StyledText></StyledText>
        <Button onPress={() => alert('push to trivia start')}>Jugar ahora</Button>
      </StyledColumn>
    </StyledBox>
  );
};

export default TriviaCard;

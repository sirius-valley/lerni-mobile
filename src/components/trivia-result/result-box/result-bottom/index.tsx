import { Pressable } from 'react-native';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledText } from '../../../styled/styles';
import { TriviaResultProps } from '../..';
import { useMemo } from 'react';

export const TriviaResultButtons = ({
  handleOnPlay,
  handleOnPress,
  triviaStatus,
}: TriviaResultProps) => {
  const text: string = useMemo(() => {
    if (triviaStatus === 'approved') {
      return 'Siguiente';
    } else if (triviaStatus === 'disapproved') {
      return 'Ir al inicio';
    } else {
      return 'Jugar trivia';
    }
  }, [triviaStatus]);

  return (
    <StyledColumn style={{ gap: 16, alignItems: 'center', justifyContent: 'center' }}>
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={handleOnPlay ? handleOnPlay : () => {}}>{text}</Button>
      </StyledBox>
      {triviaStatus === 'not_started' && (
        <Pressable onPress={handleOnPress ? handleOnPress : () => {}}>
          <StyledText variant="h4" color="primary500" css={{ textDecorationLine: 'underline' }}>
            {'Mejor paso :('}
          </StyledText>
        </Pressable>
      )}
    </StyledColumn>
  );
};

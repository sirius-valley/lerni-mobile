import React from 'react';
import { useRouter } from 'expo-router';
import { Result } from '..';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { RaceFlagIcon } from '../../../../../assets/icons/RaceFlagIcon';
import { useTheme } from 'styled-components/native';

export const StartTriviaPill = () => {
  const theme = useTheme();
  const router = useRouter();

  const icon = () => {
    return <RaceFlagIcon size={150} />;
  };

  const title = 'Desafío intelectual';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={() => router.push('perfil')}>Jugar trivia</Button>
        <Button variant="ghost" onPress={() => router.push('explore')}>
          {'Mejor paso :('}
        </Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ gap: 8, justifyContent: 'center', alignItems: 'center' }}>
        <StyledText variant="body2" style={{ color: theme.gray50, textAlign: 'center' }}>
          {
            'Pon a prueba lo que aprendiste desafiando a algún compañero y compitiendo por quien sabe más!'
          }
        </StyledText>

        <StyledColumn style={{ justifyContent: 'center', maxWidth: '70%' }}>
          <StyledRow style={{ alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <StyledText variant="body2" style={{ color: theme.gray50, textAlign: 'center' }}>
              {'Además, tendrás la posibilidad de ganar '}
              <StyledText style={{ color: theme.gray50, fontFamily: 'Roboto-Bold', fontSize: 14 }}>
                {'24 Puntos'}
              </StyledText>
              {'!'}
            </StyledText>
          </StyledRow>
        </StyledColumn>
      </StyledColumn>
    );
  };

  return <Result icon={icon} title={title} footer={footer} content={content} />;
};

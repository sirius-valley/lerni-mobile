import React from 'react';
import { useRouter } from 'expo-router';
import { Result } from '..';
import { RaceFlagIcon } from '../../../../../assets/icons/RaceFlagIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledText } from '../../../styled/styles';
import { useTheme } from 'styled-components/native';
import { Pressable } from 'react-native';
import { useLDispatch } from '../../../../redux/hooks';
import { setModalOpen } from '../../../../redux/slice/utils.slice';
import { ModalTypeEnum } from '../../../../utils/utils';

export const TriviaPill = () => {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useLDispatch();

  const icon = () => {
    return <RaceFlagIcon size={150} />;
  };

  const title = 'Desafío Intelectual';

  const handleOnPress = () => {
    router.push('explore');
    dispatch(setModalOpen(ModalTypeEnum.FEEDBACK_MODAL));
  };
  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%', gap: 16 }}>
        <Button onPress={() => router.push('/quiz/starting-page')}>Jugar trivia </Button>
        <Pressable onPress={handleOnPress}>
          <StyledText
            variant="h4"
            style={{
              color: theme.primary400,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}
          >
            {'Mejor paso :('}
          </StyledText>
        </Pressable>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ alignItems: 'center', gap: 20 }}>
        <StyledText style={{ color: theme.gray400, textAlign: 'center' }}>
          Pone a prueba lo que aprendiste desafiando a algún compañero y compitiendo por quien sabe
          mas!
        </StyledText>
        <StyledText style={{ color: theme.gray400, textAlign: 'center', width: 300 }}>
          Ademas vas a tener la posibilidad de ganar
          <StyledText style={{ color: theme.gray400, textAlign: 'center', fontWeight: '700' }}>
            {' '}
            24 puntos!
          </StyledText>
        </StyledText>
      </StyledColumn>
    );
  };

  return <Result icon={icon} title={title} footer={footer} content={content} />;
};

import React from 'react';
import { Modal } from 'react-native';
import { useLDispatch, useLSelector } from '../../../redux/hooks';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import Button from '../../../components/styled/Button';
import { useRouter } from 'expo-router';
import { ModalProps } from '../interfaces';
import { StyledModal } from '../styles';
import { resetAllStates } from '../../../redux/store';

interface IntroModalProps extends ModalProps {
  openModal?: boolean;
}

const IntroModal = ({ handleOnClose }: IntroModalProps) => {
  const theme = useTheme();
  const route = useRouter();
  const dispatch = useLDispatch();
  const handleLogout = () => dispatch(resetAllStates());

  const handleGoToIntroduction = () => {
    route.push('/(auth)/pill/introduction');
    handleOnClose();
  };
  return (
    <StyledModal>
      <StyledColumn css={{ gap: 8, alignItems: 'center' }}>
        <StyledColumn css={{ gap: 8, alignItems: 'center' }}>
          <StyledText
            variant="h1"
            css={{
              textAlign: 'center',
              color: theme.gray100,
            }}
          >
            Ya casi! &#x1F64C;&#x1F3FB;
          </StyledText>
          <StyledText variant="body1" css={{ color: theme.gray100 }}>
            Para acceder al contenido, es necesario que completes la{' '}
            <StyledText css={{ fontFamily: 'Roboto-Bold', color: theme.gray100 }}>
              introducción{' '}
            </StyledText>
            primero.
          </StyledText>
        </StyledColumn>
      </StyledColumn>

      <Button
        onPress={handleGoToIntroduction}
        variant={'primary'}
        css={{
          width: '100%',
          backgroundColor: theme.primary400,
        }}
      >
        Ir a la introducción
      </Button>
      <Button
        onPress={handleLogout}
        variant="ghost"
        css={{
          width: '100%',
        }}
      >
        Cerrar sesión
      </Button>
    </StyledModal>
  );
};

export default IntroModal;

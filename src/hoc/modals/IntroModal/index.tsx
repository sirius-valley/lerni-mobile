import React from 'react';
import { Modal } from 'react-native';
import { useLSelector } from '../../../redux/hooks';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import Button from '../../../components/styled/Button';

interface IntroModalProps {
  handleOnClose: () => void;
  openModal?: boolean;
}

const IntroModal = ({ handleOnClose }: IntroModalProps) => {
  const theme = useTheme();
  const modalType = useLSelector((state) => state.utils.modalType);
  const open = !!modalType;
  return (
    <Modal animationType="slide" transparent={true} visible={open} onRequestClose={handleOnClose}>
      <StyledColumn
        css={{
          width: 342,
          alignItems: 'center',
          paddingHorizontal: 24,
          paddingTop: 32,
          paddingBottom: 24,
          gap: 16,
          backgroundColor: theme.primary700,
          position: 'absolute',
          top: 250,
          left: 24,
          borderRadius: 8,
          border: 1,
          borderStyle: 'solid',
          borderColor: theme.primary650,
        }}
      >
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
          onPress={handleOnClose}
          variant={'primary'}
          css={{
            width: '100%',
            backgroundColor: theme.primary400,
          }}
        >
          Ir a la introducción
        </Button>
        <Button onPress={handleOnClose} variant="ghost">
          Más tarde
        </Button>
      </StyledColumn>
    </Modal>
  );
};

export default IntroModal;

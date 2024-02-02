import React from 'react';
import { Modal } from 'react-native';
import { useLSelector } from '../../../redux/hooks';
import { StyledColumn, StyledText } from '../../../components/styled/styles';
import { useTheme } from 'styled-components';
import Button from '../../../components/styled/Button';
import { useRouter } from 'expo-router';

interface IntroModalProps {
  handleOnClose: () => void;
  openModal?: boolean;
}

const IntroModal = ({ handleOnClose }: IntroModalProps) => {
  const theme = useTheme();
  const modalType = useLSelector((state) => state.utils.modalType);
  const open = !!modalType;
  const route = useRouter();

  const handleGoToIntroduction = () => {
    route.push('/(auth)/pill/introduction');
    handleOnClose();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={open} onRequestClose={handleOnClose}>
      <StyledColumn style={{ justifyContent: 'center', alignItems: 'center' }}>
        <StyledColumn
          css={{
            width: 342,
            alginItems: 'center',
            paddingHorizontal: 24,
            paddingTop: 32,
            paddingBottom: 24,
            gap: 16,
            backgroundColor: theme.primary700,
            position: 'absolute',
            top: 250,
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
            onPress={handleOnClose}
            variant="ghost"
            css={{
              width: '100%',
            }}
          >
            Más tarde
          </Button>
        </StyledColumn>
      </StyledColumn>
    </Modal>
  );
};

export default IntroModal;

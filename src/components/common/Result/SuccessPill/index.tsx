import { useRouter } from 'expo-router';
import { Result } from '..';
import { CongratulationsIcon } from '../../../../../assets/icons/CongratulationsIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import RhombusIcon from '../../../../../assets/icons/RhombusIcon';
import { useTheme } from 'styled-components/native';
import React, { useEffect, useRef } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import HandsUpIcon from '../../../../../assets/icons/HandsUpIcon';

interface SuccessPillProps {
  show: boolean;
  programName: string;
  hasConfeti?: boolean;
  iconType?: 'confeti' | 'handsup';
  winsPoints?: boolean;
  actionButtonLabel?: string;
}

export const SuccessPill = ({
  show,
  programName,
  hasConfeti = false,
  iconType = 'confeti',
  winsPoints = false,
  actionButtonLabel = 'Siguiente',
}: SuccessPillProps) => {
  const theme = useTheme();
  const router = useRouter();
  const shouldRenderConfeti = hasConfeti && show;
  const ref = useRef<any>();

  const icon = () => {
    switch (iconType) {
      case 'confeti':
        return <CongratulationsIcon size={150} />;
      case 'handsup':
        return <HandsUpIcon size={150} />;
      default:
        return null;
    }
  };

  const title = 'Felicidades!';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={() => router.back()}>{actionButtonLabel}</Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ gap: 8, alignItems: 'center' }}>
        <StyledText variant="body2" style={{ color: theme.gray400 }}>
          Terminaste {programName}!
        </StyledText>
        {winsPoints && (
          <StyledRow style={{ alignContent: 'center', justifyContent: 'center', gap: 8 }}>
            <StyledText variant={'body3'} style={{ color: theme.gray400 }}>
              Ganaste
            </StyledText>
            <RhombusIcon size={12} />
            <StyledText variant={'body3'} style={{ color: theme.gray400 }}>
              5 Puntos!
            </StyledText>
          </StyledRow>
        )}
      </StyledColumn>
    );
  };

  useEffect(() => {
    if (shouldRenderConfeti) {
      setTimeout(() => {
        ref.current.start();
      }, 500);
    }
  }, [show]);

  return (
    <>
      <Result icon={icon} title={title} footer={footer} content={content} />
      {shouldRenderConfeti && (
        <ConfettiCannon count={150} origin={{ x: -10, y: 0 }} ref={ref} autoStart={false} fadeOut />
      )}
    </>
  );
};

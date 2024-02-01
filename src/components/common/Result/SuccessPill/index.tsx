import { useRouter } from 'expo-router';
import { Result } from '..';
import { CongratulationsIcon } from '../../../../../assets/icons/CongratulationsIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import RhombusIcon from '../../../../../assets/icons/RhombusIcon';
import { useTheme } from 'styled-components/native';
import React, { useEffect, useRef } from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';

interface SuccessPillProps {
  show: boolean;
  programName: string;
}

export const SuccessPill = ({ show, programName }: SuccessPillProps) => {
  const theme = useTheme();
  const router = useRouter();
  const ref = useRef<any>();
  const icon = () => {
    return <CongratulationsIcon size={150} />;
  };

  const title = 'Felicidades!';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={() => router.push('explore')}>Siguiente</Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ gap: 8, alignItems: 'center' }}>
        <StyledText variant="body2" style={{ color: theme.gray50 }}>
          Terminaste {programName}!
        </StyledText>
        <StyledRow style={{ alignContent: 'center', justifyContent: 'center', gap: 8 }}>
          <StyledText variant={'body3'} style={{ color: theme.gray400 }}>
            Ganaste
          </StyledText>
          <RhombusIcon size={12} />
          <StyledText variant={'body3'} style={{ color: theme.gray400 }}>
            5 Puntos!
          </StyledText>
        </StyledRow>
      </StyledColumn>
    );
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        ref.current.start();
      }, 500);
    }
  }, [show]);

  return (
    <>
      <Result icon={icon} title={title} footer={footer} content={content} />
      {show && (
        <ConfettiCannon count={150} origin={{ x: -10, y: 0 }} ref={ref} autoStart={false} fadeOut />
      )}
    </>
  );
};

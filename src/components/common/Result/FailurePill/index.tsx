import React from 'react';
import { useRouter } from 'expo-router';
import { Result } from '..';
import { TiredIcon } from '../../../../../assets/icons/TiredIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { useTheme } from 'styled-components/native';

export const FailurePill = () => {
  const theme = useTheme();
  const router = useRouter();

  const icon = () => {
    return <TiredIcon size={150} />;
  };

  const title = 'Estuviste cerca!';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={() => router.push('explore')}>Ir al inicio </Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ alignItems: 'center' }}>
        <StyledText style={{ color: theme.gray50, textAlign: 'center' }}>
          Hasta Einstein tropezó antes de triunfar.
        </StyledText>
        <StyledText style={{ color: theme.gray50, textAlign: 'center' }}>
          No te desanimes. En dos días, otra oportunidad.
        </StyledText>
      </StyledColumn>
    );
  };

  return <Result Icon={icon} Title={title} Footer={footer} Content={content} />;
};

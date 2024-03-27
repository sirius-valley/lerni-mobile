import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Result } from '..';
import { TiredIcon } from '../../../../../assets/icons/TiredIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { useTheme } from 'styled-components/native';

interface FailurePillProps {
  callback: () => void;
}
export const FailurePill = ({ callback }: FailurePillProps) => {
  const theme = useTheme();
  const router = useRouter();

  const icon = () => {
    return <TiredIcon size={150} />;
  };

  const title = 'Estuviste cerca!';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button
          onPress={() => {
            router.push('explore');
            callback();
          }}
        >
          Ir al inicio{' '}
        </Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ alignItems: 'center' }}>
        <StyledText style={{ color: theme.gray400, textAlign: 'center' }}>
          Hasta Einstein tropezó antes de triunfar. {'\n'}
          No te desanimes. En dos días, {'\n'} otra oportunidad.
        </StyledText>
      </StyledColumn>
    );
  };

  return <Result icon={icon} title={title} footer={footer} content={content} />;
};

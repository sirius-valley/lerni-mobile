import React from 'react';
import * as Progress from 'react-native-progress';
import { StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import LockIcon from '../../../../assets/icons/LockIcon';

interface PillRowInterface {
  pillNumber: number;
  progress: number;
  title: string;
  duration: number;
  started?: boolean;
}

const PillRow = ({ pillNumber, progress, title, duration, started = true }: PillRowInterface) => {
  const theme = useTheme();
  return (
    <StyledRow css={{ alignItems: 'center', gap: '8px', height: '40px' }}>
      <StyledRow css={{ width: '10%', justifyContent: 'center' }}>
        {started ? (
          <Progress.Circle
            size={30}
            borderWidth={0}
            unfilledColor={theme.gray600}
            color={theme.primary500}
            progress={progress}
            showsText={true}
            formatText={() => pillNumber}
            textStyle={{
              fontSize: 18,
              color: 'white',
              fontWeight: '600',
              marginBottom: 6,
            }}
            animated={false}
            thickness={3.6}
          />
        ) : (
          <LockIcon />
        )}
      </StyledRow>
      <StyledText variant="body2" color="gray100" css={{ width: '75%' }}>
        {title}
      </StyledText>
      <StyledText variant="body3" color="gray500">
        {duration}min
      </StyledText>
    </StyledRow>
  );
};

export default PillRow;

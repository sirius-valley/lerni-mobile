import React from 'react';
import * as Progress from 'react-native-progress';
import { StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import LockIcon from '../../../../assets/icons/LockIcon';

interface PillRowInterface {
  pillNumber: number;
  pillProgress: number;
  pillName: string;
  duration: number;
}

const PillRow = ({ pillNumber, pillProgress, pillName, duration }: PillRowInterface) => {
  const theme = useTheme();
  const started = pillProgress > 0 ? true : false;

  return (
    <StyledRow css={{ alignItems: 'center', gap: '8px', height: '40px' }}>
      <StyledRow css={{ width: '10%', justifyContent: 'center' }}>
        {started ? (
          <Progress.Circle
            size={30}
            borderWidth={0}
            unfilledColor={theme.gray600}
            color={theme.primary500}
            progress={pillProgress}
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
        {pillName}
      </StyledText>
      <StyledText variant="body3" color="gray500">
        {duration}{' min'}
      </StyledText>
    </StyledRow>
  );
};

export default PillRow;

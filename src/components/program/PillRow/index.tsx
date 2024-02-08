import React from 'react';
import * as Progress from 'react-native-progress';
import { StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import LockIcon from '../../../../assets/icons/LockIcon';
import ChevronRightIcon from '../../../../assets/icons/ChevronRightIcon';

interface PillRowInterface {
  pillNumber: number;
  progress: number;
  title: string;
  started?: boolean;
}

const PillRow = ({ pillNumber, progress, title, started = true }: PillRowInterface) => {
  const theme = useTheme();
  return (
    <StyledRow
      css={{
        alignItems: 'center',
        gap: '8px',
        minHeight: 48,
        padding: 12,
        borderRadius: 40,
        backgroundColor: started ? theme.primary800 : theme.gray800,
        justifyContent: 'space-between',
      }}
    >
      <StyledRow css={{ alignItems: 'center', gap: 8 }}>
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
        <StyledText variant="body2" color={started ? 'white' : 'gray600'} css={{ width: '75%' }}>
          {title}
        </StyledText>
        {/*<StyledText variant="body3" color="gray500">*/}
        {/*  {duration}min*/}
        {/*</StyledText>*/}
      </StyledRow>
      {started && <ChevronRightIcon color={theme.primary600} />}
    </StyledRow>
  );
};

export default PillRow;

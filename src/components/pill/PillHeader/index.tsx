import React from 'react';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import * as Progress from 'react-native-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CancelIcon } from '../../../../assets/icons/CancelIcon';

interface Pill {
  title: string;
  pillNumber: number;
  percentageDone: number;
}

const PillHeader = () => {
  const theme = useTheme();
  const mockedPill: Pill = {
    title: 'Nombre de la pildora',
    pillNumber: 1,
    percentageDone: 0.35,
  };
  return (
    <StyledRow
      css={{
        height: 117,
        background: theme.primary900,
        width: '100%',
      }}
    >
      <StyledColumn css={{ alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12 }}>
        <StyledRow
          css={{
            alignItems: 'center',
            gap: 12,
            width: '100%',
          }}
        >
          <StyledRow
            css={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <StyledRow css={{ alignItems: 'center', gap: 8 }}>
              <Progress.Circle
                size={30}
                borderWidth={0}
                unfilledColor={theme.gray600}
                color={theme.primary500}
                progress={mockedPill.percentageDone}
                showsText={true}
                formatText={() => mockedPill.pillNumber}
                textStyle={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: 6,
                }}
                animated={false}
                thickness={3.6}
              />
              <StyledText variant="h3" css={{ color: theme.gray100 }}>
                {mockedPill.title}
              </StyledText>
            </StyledRow>
            <TouchableOpacity onPress={() => alert('X')}>
              <CancelIcon color={theme.gray500} size={24} />
            </TouchableOpacity>
          </StyledRow>
        </StyledRow>
        <StyledBox
          css={{
            borderBottomWidth: 1,
            borderBottomColor: theme.gray500,
            width: '100%',
          }}
        ></StyledBox>
      </StyledColumn>
    </StyledRow>
  );
};

export default PillHeader;

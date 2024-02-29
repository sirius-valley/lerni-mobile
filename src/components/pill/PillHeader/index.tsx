import React from 'react';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import * as Progress from 'react-native-progress';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CancelIcon } from '../../../../assets/icons/CancelIcon';
import { useRouter } from 'expo-router';

export interface PillHeaderProps {
  title: string;
  pillNumber: number;
  percentageDone: number;
}

const PillHeader = ({ title, pillNumber, percentageDone }: PillHeaderProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <StyledRow
      css={{
        height: 'fit-content',
        background: theme.primary900,
        width: '100%',
        paddingHorizontal: 24,
      }}
    >
      <StyledColumn css={{ alignItems: 'center', justifyContent: 'center', gap: 8 }}>
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
                progress={percentageDone / 100}
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
              <StyledText variant="h3" css={{ color: theme.gray100 }}>
                {title}
              </StyledText>
            </StyledRow>
            <TouchableOpacity onPress={() => router.back()}>
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
        />
      </StyledColumn>
    </StyledRow>
  );
};

export default PillHeader;

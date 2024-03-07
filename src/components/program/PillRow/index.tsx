import React from 'react';
import * as Progress from 'react-native-progress';
import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import LockIcon from '../../../../assets/icons/LockIcon';
import { Platform, Pressable } from 'react-native';
import ChevronRightIcon from '../../../../assets/icons/ChevronRightIcon';
import { EllipseIcon } from '../../../../assets/icons/EllipseIcon';
import { useRouter } from 'expo-router';
import QuestionnaireIcon from '../../../../assets/icons/QuestionnaireIcon';

interface PillRowInterface {
  pillNumber: number;
  pillProgress: number;
  pillName: string;
  duration: number;
  isLocked: boolean;
  unlockTime?: string;
  id: string;
  isQuestionnaire?: boolean;
}

const PillRow = ({
  pillNumber,
  pillProgress,
  pillName,
  duration,
  isLocked,
  unlockTime,
  isQuestionnaire = false,
  id,
}: PillRowInterface) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <StyledRow
      css={{
        alignItems: 'center',
        gap: '8px',
        height: 48,
        padding: 12,
        borderRadius: 40,
        backgroundColor: !isLocked ? theme.primary800 : theme.gray800,
        justifyContent: 'space-between',
      }}
    >
      <StyledRow css={{ alignItems: 'center', gap: 8, justifyContent: 'flex-start', width: '90%' }}>
        <StyledRow css={{ width: '10%', justifyContent: 'center' }}>
          {isQuestionnaire ? (
            <QuestionnaireIcon color={isLocked ? theme.gray600 : theme.primary500} />
          ) : !isLocked ? (
            <Progress.Circle
              size={28}
              borderWidth={0}
              unfilledColor={theme.gray600}
              color={theme.primary500}
              progress={pillProgress}
              showsText={true}
              formatText={() => pillNumber}
              textStyle={{
                fontSize: 14,
                color: 'white',
                fontWeight: '600',
              }}
              animated={false}
              thickness={3.6}
            />
          ) : (
            <LockIcon />
          )}
        </StyledRow>
        <StyledRow css={{ alignItems: 'center', gap: 4, width: '75%' }}>
          <StyledText variant="body2" color={!isLocked ? 'gray100' : 'gray600'}>
            {pillName}
          </StyledText>
          <EllipseIcon size={4} color={!isLocked ? theme.gray100 : theme.gray500} />
          <StyledText variant="body3" color={!isLocked ? 'primary600' : 'gray600'}>
            {duration} min
          </StyledText>
        </StyledRow>
      </StyledRow>
      {!isLocked && <ChevronRightIcon color={theme.primary600} />}
    </StyledRow>
  );
};

export default PillRow;

import {
  StyledBox,
  StyledColumn,
  StyledImage,
  StyledPressable,
  StyledRow,
} from '../../../../../../../components/styled/styles';
import * as Progress from 'react-native-progress';
import React from 'react';
import { useTheme } from 'styled-components';
import { Pressable } from 'react-native';
import BackArrow from '../../../../../../../../assets/icons/BackArrow';
import { useRouter } from 'expo-router';
import PlatIcon from '../../../../../../../../assets/icons/PlayIcon';

interface HeaderProgramProps {
  imgURL: string;
  progress: number;
  nextPillId: { type: 'questionnaire' | 'pill'; id: string } | undefined;
}

const HeaderProgram = ({ imgURL, progress, nextPillId }: HeaderProgramProps) => {
  const theme = useTheme();
  const router = useRouter();

  const handleGoToNextPillOrQuestionnaire = () => {
    if (nextPillId?.type === 'pill') {
      router.push({
        pathname: '/(auth)/pill/mainPill',
        params: {
          id: nextPillId.id,
        },
      });
    } else {
      router.push({
        pathname: '/(auth)/questionnaire/questionnaireDetail',
        params: {
          id: nextPillId?.id,
        },
      });
    }
  };

  return (
    <StyledColumn css={{ width: '100%', position: 'relative' }}>
      <StyledBox css={{ position: 'relative' }}>
        <StyledImage
          source={{ uri: imgURL }}
          defaultSource={{ uri: imgURL }}
          style={{ width: '100%', height: 190 }}
          loadingIndicatorSource={require('../../../../../../../../assets/backgroundProgramImage.png')}
        />
        <StyledBox css={{ width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
          <Progress.Bar
            unfilledColor={theme.gray600}
            color={theme.primary400}
            height={8}
            progress={progress / 100}
            borderWidth={0}
            width={null}
            borderRadius={0}
          />
        </StyledBox>
        <StyledPressable
          css={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            backgroundColor: theme.primary500,
            position: 'absolute',
            right: 24,
            bottom: -20,
            alignItems: 'center',
            justifyContent: 'center',
            display: nextPillId ? 'flex' : 'none',
          }}
          onPress={handleGoToNextPillOrQuestionnaire}
        >
          <PlatIcon color={theme.white} size={28} />
        </StyledPressable>
      </StyledBox>
      <StyledRow css={{ position: 'absolute', top: 16, zIndex: 2, left: 8 }}>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <BackArrow color={theme.white} />
        </Pressable>
      </StyledRow>
    </StyledColumn>
  );
};
export default HeaderProgram;

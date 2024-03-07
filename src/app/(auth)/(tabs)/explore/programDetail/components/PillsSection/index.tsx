import { StyledBox, StyledColumn, StyledText } from '../../../../../../../components/styled/styles';
import { Pressable } from 'react-native';
import PillRow from '../../../../../../../components/program/PillRow';
import React from 'react';
import { ProgramResponseType } from '../../../../../../../redux/service/types/program.response';
import { useRouter } from 'expo-router';
import { useLSelector } from '../../../../../../../redux/hooks';

interface PillsSectionProps {
  pills: ProgramResponseType['pills'];
  questionnaire: ProgramResponseType['questionnaire'];
}

const PillsSection = ({ pills, questionnaire }: PillsSectionProps) => {
  const router = useRouter();

  const questionnaireUnlockTime = useLSelector((state) => state.program.questionnaireUnlockTime);
  const isQuestionnaireLocked = !!questionnaireUnlockTime;

  const handleGoToPill = (id: string) =>
    router.push({
      pathname: 'pill/mainPill',
      params: {
        id,
      },
    });

  const handleGoToQuestionnaire = (id: string) => {
    if (isQuestionnaireLocked) return null;
    router.push({
      pathname: `pill/questionnaire/${id}`,
    });
  };

  return (
    <StyledColumn css={{ gap: '8px', width: '100%', marginTop: '16px' }}>
      <StyledText color="gray100" variant="h3">
        Pildoras
      </StyledText>
      {pills?.map((pill, idx) => (
        <Pressable key={idx} onPress={() => handleGoToPill(pill.id)}>
          <StyledBox>
            <PillRow
              pillName={pill.pillName}
              pillProgress={pill.pillProgress / 100}
              pillNumber={idx + 1}
              duration={pill.completionTimeMinutes}
              isLocked={pill.isLocked}
              id={pill.id}
            />
          </StyledBox>
        </Pressable>
      ))}
      <Pressable onPress={() => handleGoToQuestionnaire(questionnaire.id)}>
        <PillRow
          pillName={questionnaire.questionnaireName}
          pillProgress={questionnaire.questionnaireProgress}
          pillNumber={0}
          duration={questionnaire.completionTimeMinutes}
          isLocked={isQuestionnaireLocked}
          unlockTime={questionnaireUnlockTime}
          id={questionnaire.id}
          isQuestionnaire
        />
      </Pressable>
    </StyledColumn>
  );
};

export default PillsSection;

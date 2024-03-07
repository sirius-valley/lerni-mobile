import React from 'react';
import { StyledColumn, StyledRow } from '../../styled/styles';
import { LabeledSend } from '../LabeledSend';
import QuestionnaireChoice from '../../styled/QuestionnaireChoice';
import { StyledQuestionnaireChoiceMainContainer } from '../../styled/QuestionnaireChoice/styles';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import PointsDisplay from '../PointsDisplay';

interface QuestionnaireMultipleAnswerProps {
  options: {
    id: string;
    text: string;
    selected?: boolean;
  }[];
  onPress?: () => void;
  onChange: (id: string) => void;
  sealed: boolean;
  correctAnswers?: string[];
  points?: number;
  isSingleAnswer?: boolean;
}

const QuestionnaireMultipleAnswer = ({
  options,
  onPress,
  onChange,
  sealed,
  correctAnswers,
  points,
  isSingleAnswer = false,
}: QuestionnaireMultipleAnswerProps) => {
  const getQuestionnaireChoiceStatus = (selected: boolean) => {
    if (sealed && selected) return 'selected';
    if (sealed && !selected) return 'not_selected';
    if (!sealed && selected) return 'default_selected';
    return 'default_not_selected';
  };

  const renderStatusIcon = (text: string, selected: boolean) => {
    if (selected && sealed && correctAnswers) {
      const isCorrect = correctAnswers?.includes(text);
      return isCorrect ? <CheckIcon /> : <MultiplyIcon />;
    }
    return null;
  };

  return (
    <StyledColumn style={{ gap: 8, alignItems: 'flex-end' }}>
      <StyledQuestionnaireChoiceMainContainer>
        {options.map((option) => (
          <StyledRow
            key={option.id}
            css={{
              width: '100%',
              justifyContent: 'flex-end',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            <QuestionnaireChoice
              status={getQuestionnaireChoiceStatus(!!option?.selected)}
              text={option.text}
              onPress={() => onChange(option.id)}
              disabled={sealed}
              id={option.id}
            />
            {renderStatusIcon(option.text, !!option.selected)}
          </StyledRow>
        ))}
      </StyledQuestionnaireChoiceMainContainer>
      {sealed && <PointsDisplay points={points ?? 0} />}
      {!sealed && !isSingleAnswer && (
        <LabeledSend
          onPress={() => onPress && onPress()}
          status={options.some((option) => option.selected) ? 'selected' : 'default'}
        />
      )}
    </StyledColumn>
  );
};

export default QuestionnaireMultipleAnswer;

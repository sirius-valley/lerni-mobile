import { Pressable } from 'react-native';
import { StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';
import React from 'react';
import { StyledAnswerButton } from './styles';
interface AnswerButtonProps {
  answer: string;
  onPress: (answer: string) => void;
  selected?: boolean;
  correctAnswer?: string;
  loading: boolean;
  selectedIsWrong: boolean;
  showCorrect: boolean;
}
const AnswerButton = ({
  answer,
  onPress,
  selected,
  correctAnswer,
  loading,
  selectedIsWrong,
  showCorrect,
}: AnswerButtonProps) => {
  const theme = useTheme();
  const isComponentSealed = loading || selected || showCorrect;

  const getStatus = () => {
    if (selectedIsWrong && !loading) return 'wrong';
    if (
      !loading &&
      (selected || answer === correctAnswer || (answer === correctAnswer && showCorrect))
    )
      return 'correct';
    if (selected && loading) return 'loading';
    return 'unselected';
  };

  return (
    <Pressable onPress={() => !isComponentSealed && onPress(answer)}>
      <StyledAnswerButton status={getStatus()}>
        <StyledText variant={'body2'} css={{ color: theme.white, textAlign: 'center' }}>
          {answer}
        </StyledText>
      </StyledAnswerButton>
    </Pressable>
  );
};
export default AnswerButton;

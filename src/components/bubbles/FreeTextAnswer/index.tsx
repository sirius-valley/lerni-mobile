import React from 'react';
import FreeTextBubble from '../../common/FreeTextBubble';
import { useLSelector } from '../../../redux/hooks';
import { StyledBox } from '../../styled/styles';
import usePill from '../../../hooks/usePill';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface FreeTextAnswerProps {
  scrollToEnd: () => void;
}

const FreeTextAnswer = ({ scrollToEnd }: FreeTextAnswerProps) => {
  const freeTextQuestionId = useLSelector((state) => state.pill.freeTextQuestionId);
  const { block, handleSendAnswer, handleFreeTextAnswer } = usePill(freeTextQuestionId ?? '', {});
  const insets = useSafeAreaInsets();
  const handleSend = () => {
    handleSendAnswer(block?.content);
  };
  if (freeTextQuestionId === undefined) return null;

  return (
    <StyledBox
      css={{
        paddingTop: 12,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: insets.bottom,
      }}
    >
      <FreeTextBubble
        value={block?.content ?? ''}
        onChangeText={handleFreeTextAnswer}
        handlePress={handleSend}
        handleOnFocus={scrollToEnd}
      />
    </StyledBox>
  );
};

export default FreeTextAnswer;

import React from 'react';
import FreeTextBubble from '../../common/FreeTextBubble';
import { useLSelector } from '../../../redux/hooks';
import { StyledBox } from '../../styled/styles';
import usePill from '../../../hooks/usePill';

const FreeTextAnswer = () => {
  const freeTextQuestionId = useLSelector((state) => state.pill.freeTextQuestionId);
  const { block, handleSendAnswer, handleFreeTextAnswer } = usePill(freeTextQuestionId ?? '', {});

  const handleSend = () => {
    handleSendAnswer(block?.content);
  };
  if (freeTextQuestionId === undefined) return null;

  return (
    <StyledBox css={{ paddingTop: 0, paddingLeft: 24, paddingRight: 24, paddingBottom: 24 }}>
      <FreeTextBubble
        value={block?.content ?? ''}
        onChangeText={handleFreeTextAnswer}
        handlePress={handleSend}
      />
    </StyledBox>
  );
};

export default FreeTextAnswer;

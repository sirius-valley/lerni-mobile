import React, { useEffect } from 'react';
import { useLDispatch, useLSelector } from '../../../redux/hooks';
import usePill from '../../../hooks/usePill';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import { setFreeTextQuestionId } from '../../../redux/slice/pill.slice';
import BubbleToRender from './BubbleToRender';

const ProfessorBubble = ['text', 'image'];
const StudentBubble = ['single-choice', 'multiple-choice', 'carousel'];

interface PillRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const PillRender = ({ blockId, nextBlockId }: PillRenderProps) => {
  const { block, nextBlockType } = usePill(blockId, { nextBlockId });
  const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
  const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
  const last = useLSelector((state) => state.pill.last);
  const isLastBubbleSide = user !== nextBlockUser;
  const profProgram = useLSelector((state) => state.pill?.pill?.teacher?.image);
  const dispatch = useLDispatch();

  useEffect(() => {
    if (block.type === 'free-text' && last === block.id) {
      dispatch(setFreeTextQuestionId({ id: block.id }));
    }
  }, [block.type]);

  return (
    <MessageContainer
      key={'bubble-' + block.id}
      user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
      css={{ marginBottom: ProfessorBubble.includes(block.type) ? 4 : 16 }}
    >
      <BubbleToRender
        isLastBubbleSide={isLastBubbleSide}
        profProgram={profProgram ?? ''}
        user={user}
        blockId={blockId}
        nextBlockId={nextBlockId ?? ''}
        last={last ?? ''}
      />
    </MessageContainer>
  );
};

export default PillRender;

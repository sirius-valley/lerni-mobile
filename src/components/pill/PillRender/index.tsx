import React from 'react';
import usePill from '../../../hooks/usePill';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import BubbleToRender from './BubbleToRender';
import { ProfessorBubble } from '../../../redux/slice/pill.slice';

interface PillRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const PillRender = ({ blockId, nextBlockId }: PillRenderProps) => {
  const { block } = usePill(blockId, { nextBlockId });

  return (
    <MessageContainer
      key={'bubble-' + block.id}
      user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
      css={{ marginBottom: ProfessorBubble.includes(block.type) ? 4 : 16 }}
    >
      <BubbleToRender blockId={blockId} nextBlockId={nextBlockId ?? ''} />
    </MessageContainer>
  );
};

export default PillRender;

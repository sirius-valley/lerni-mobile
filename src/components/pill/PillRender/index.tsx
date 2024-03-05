import React from 'react';
import usePill from '../../../hooks/usePill';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import BubbleToRender from './BubbleToRender';
import { ProfessorBubble } from '../../../redux/slice/pill.slice';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useLSelector } from '../../../redux/hooks';

interface PillRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const PillRender = ({ blockId, nextBlockId }: PillRenderProps) => {
  const { block } = usePill(blockId, { nextBlockId });
  const last = useLSelector((state) => state.pill.last);

  return (
    <Animated.View entering={FadeInDown.delay(last === block.id ? 600 : 300)}>
      <MessageContainer
        key={'bubble-' + block.id}
        user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
        css={{ marginBottom: ProfessorBubble.includes(block.type) ? 4 : 16 }}
      >
        <BubbleToRender blockId={blockId} nextBlockId={nextBlockId ?? ''} />
      </MessageContainer>
    </Animated.View>
  );
};

export default PillRender;

import React from 'react';

import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import useQuestionnaire from '../../../hooks/useQuestionnaire';
import { useLSelector } from '../../../redux/hooks';
import QuestionnaireBubbleToRender from './QuestionnaireBubbleToRender';

const ProfessorBubble = ['text', 'image'];

interface QuestionnaireRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const QuestionnaireRender = ({ blockId, nextBlockId }: QuestionnaireRenderProps) => {
  const { block, nextBlockType } = useQuestionnaire(blockId, { nextBlockId });

  const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
  const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
  const last = useLSelector((state) => state.questionnaire.last);
  const isLastBubbleSide = user !== nextBlockUser;
  const profProgram = useLSelector((state) => state.questionnaire?.questionnaire?.teacher?.image);

  return (
    <MessageContainer
      key={'bubble-' + block.id}
      user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
      css={{ marginBottom: ProfessorBubble.includes(block.type) ? 4 : 16 }}
    >
      <QuestionnaireBubbleToRender
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

export default QuestionnaireRender;

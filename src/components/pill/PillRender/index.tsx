import { useLDispatch, useLSelector } from '../../../redux/hooks';
import TextBubble from '../../bubbles/TextBubble';
import React from 'react';
import { Avatar } from '../../common/Avatar';
import ImageBubble from '../../bubbles/ImageBubble';
import MultipleAnswer from '../../bubbles/MultipleAnswer';
import usePill from '../../../hooks/usePill';
import SingleAnswer from '../../bubbles/SingleAnswer';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import { setFreeTextQuestionId } from '../../../redux/slice/pill.slice';

const ProfessorBubble = ['text', 'image'];
const StudentBubble = ['single-choice', 'multiple-choice', 'carousel'];

interface PillRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const PillRender = ({ blockId, nextBlockId }: PillRenderProps) => {
  const {
    block,
    nextBlockType,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSendAnswer,
    handleFreeTextAnswer,
  } = usePill(blockId, { nextBlockId });
  const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
  const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
  const last = useLSelector((state) => state.pill.last);
  const isLastBubbleSide = user !== nextBlockUser;
  const dispatch = useLDispatch();
  const BubbleToRender = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <TextBubble key={'bubble-inner-' + block.id} content={block.content} user={user} />
            {isLastBubbleSide && <Avatar css={{ marginBottom: 16, marginTop: 8 }} />}
          </>
        );
      case 'image':
        return (
          <>
            <ImageBubble key={'bubble-inner-' + block.id} url={block.value} user={user} />
            {isLastBubbleSide && <Avatar css={{ marginBottom: 16, marginTop: 8 }} />}
          </>
        );
      case 'multiple-choice':
        return (
          <MultipleAnswer
            key={'bubble-inner-' + block.id}
            options={block.options}
            onPress={() =>
              handleSendAnswer(
                block.options
                  .map((option: any) => (option.selected ? option.id : null))
                  .filter((option: any) => option !== null),
              )
            }
            onChange={handleMultipleAnswer}
            sealed={!(last === block.id)}
          />
        );
      case 'single-choice':
        return (
          <SingleAnswer
            key={'bubble-inner-' + block.id}
            options={block.options}
            onPress={(id) => handleSingleAnswer(id)}
            sealed={!(last === block.id)}
          />
        );
      case 'free-text':
        if (!(last === block.id)) {
          return (
            <>
              <TextBubble
                key={'bubble-inner-ft-' + block.id}
                user={'student'}
                content={block.content}
              />
              <Avatar css={{ marginBottom: 16, marginTop: 8 }} />
            </>
          );
        } else {
          dispatch(setFreeTextQuestionId({ id: block.id }));
          return <></>;
        }
    }
  };

  return (
    <MessageContainer
      key={'bubble-' + block.id}
      user={ProfessorBubble.includes(block.type) ? 'professor' : 'student'}
      css={{ marginBottom: ProfessorBubble.includes(block.type) ? 4 : 16 }}
    >
      <BubbleToRender />
    </MessageContainer>
  );
};

export default PillRender;

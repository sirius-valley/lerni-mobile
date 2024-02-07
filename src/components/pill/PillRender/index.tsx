import { useLDispatch, useLSelector } from '../../../redux/hooks';
import TextBubble from '../../bubbles/TextBubble';
import React, { useEffect } from 'react';
import { Avatar } from '../../common/Avatar';
import ImageBubble from '../../bubbles/ImageBubble';
import MultipleAnswer from '../../bubbles/MultipleAnswer';
import usePill from '../../../hooks/usePill';
import SingleAnswer from '../../bubbles/SingleAnswer';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import { setFreeTextQuestionId } from '../../../redux/slice/pill.slice';
import Carousel from '../../pill-blocks/Carousel';

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
    handleSelectMultipleAnswer,
    handleCarousel,
    handleSelectCarousel,
    handleSendAnswer,
    handleFreeTextAnswer,
  } = usePill(blockId, { nextBlockId });
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

  // We could add a useCallback to memorize this function. In the future, we can add this change and check that everything is working as expected
  const BubbleToRender = () => {
    switch (block.type) {
      case 'text':
        return (
          <>
            <TextBubble key={'bubble-inner-' + block.id} content={block.content} user={user} />
            {isLastBubbleSide && (
              <Avatar css={{ marginBottom: 16, marginTop: 8 }} uri={profProgram} />
            )}
          </>
        );
      case 'image':
        return (
          <>
            <ImageBubble key={'bubble-inner-' + block.id} url={block.value} user={user} />
            {isLastBubbleSide && (
              <Avatar css={{ marginBottom: 16, marginTop: 8 }} uri={profProgram} />
            )}
          </>
        );
      case 'carousel':
        return (
          <Carousel
            items={block.items}
            onPress={() =>
              handleCarousel
            }
            onSelect={(id) => handleSelectCarousel(id)}
            sealed={block.sealed}
          />
        );  
      case 'multiple-choice':
        return (
          <MultipleAnswer
            key={'bubble-inner-' + block.id}
            options={block.options}
            onPress={() =>
              handleMultipleAnswer
            }
            onChange={(id) => handleSelectMultipleAnswer(id)}
            sealed={block.sealed}
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

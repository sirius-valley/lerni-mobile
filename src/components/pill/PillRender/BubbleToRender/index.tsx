import TextBubble from '../../../bubbles/TextBubble';
import React, { useEffect } from 'react';
import Avatar from '../../../common/Avatar';
import ImageBubble from '../../../bubbles/ImageBubble';
import MultipleAnswer from '../../../bubbles/MultipleAnswer';
import usePill from '../../../../hooks/usePill';
import SingleAnswer from '../../../bubbles/SingleAnswer';
import Carousel from '../../../pill-blocks/Carousel';
import { ProfessorBubble, setFreeTextQuestionId } from '../../../../redux/slice/pill.slice';
import { useLDispatch, useLSelector } from '../../../../redux/hooks';

type UserType = 'professor' | 'student';

interface BubbleToRenderProps {
  blockId: string;
  nextBlockId: string;
}

const BubbleToRender = ({ blockId, nextBlockId }: BubbleToRenderProps) => {
  const {
    block,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSelectMultipleAnswer,
    nextBlockType,
  } = usePill(blockId, { nextBlockId });
  const dispatch = useLDispatch();
  const last = useLSelector((state) => state.pill.last);
  const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
  const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
  const profProgram = useLSelector((state) => state.pill?.pill?.teacher?.image);
  const isLastBubbleSide = user !== nextBlockUser;

  useEffect(() => {
    if (block.type === 'free-text' && last === block.id) {
      dispatch(setFreeTextQuestionId({ id: block.id }));
    }
  }, [block.type]);

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
          <ImageBubble
            key={'bubble-inner-' + block.id}
            url={block.value || block.content}
            user={user}
          />
          {isLastBubbleSide && (
            <Avatar css={{ marginBottom: 16, marginTop: 8 }} uri={profProgram} />
          )}
        </>
      );
    case 'carousel':
      return <Carousel blockId={blockId} nextBlockId={nextBlockId ?? ''} />;
    case 'multiple-choice':
      return (
        <MultipleAnswer
          key={'bubble-inner-' + block.id}
          options={block.options}
          onPress={handleMultipleAnswer}
          onChange={(id) => handleSelectMultipleAnswer(id)}
          sealed={block.sealed || !(last === block.id)}
        />
      );
    case 'single-choice':
      return (
        <SingleAnswer
          key={'bubble-inner-' + block.id}
          options={block.options}
          onPress={(id) => handleSingleAnswer(id)}
          sealed={block.sealed || !(last === block.id)}
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

export default BubbleToRender;

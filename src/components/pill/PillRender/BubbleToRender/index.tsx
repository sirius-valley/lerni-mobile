import TextBubble from '../../../bubbles/TextBubble';
import React from 'react';
import Avatar from '../../../common/Avatar';
import ImageBubble from '../../../bubbles/ImageBubble';
import MultipleAnswer from '../../../bubbles/MultipleAnswer';
import usePill from '../../../../hooks/usePill';
import SingleAnswer from '../../../bubbles/SingleAnswer';
import Carousel from '../../../pill-blocks/Carousel';

type UserType = 'professor' | 'student';

interface BubbleToRenderProps {
  isLastBubbleSide: boolean;
  profProgram: string;
  user: UserType;
  blockId: string;
  nextBlockId: string;
  last: string;
}

const BubbleToRender = ({
  isLastBubbleSide,
  profProgram,
  user,
  blockId,
  nextBlockId,
  last,
}: BubbleToRenderProps) => {
  const { block, handleSingleAnswer, handleMultipleAnswer, handleSelectMultipleAnswer } = usePill(
    blockId,
    { nextBlockId },
  );

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

import { View, Text } from 'react-native';
import React from 'react';
import TextBubble from '../../bubbles/TextBubble';
import ImageBubble from '../../bubbles/ImageBubble';
import { Avatar } from '../../common/Avatar';
import { MessageContainer } from '../../bubbles/ChatBubble/styles';
import useQuestionnaire from '../../../hooks/useQuestionnaire';
import { useLSelector } from '../../../redux/hooks';
import QuestionnaireMultipleAnswer from '../../bubbles/QuestionnaireAnswer';
import QuestionnaireImgAnswer from '../../bubbles/QuestionnaireImgAnswer';

const ProfessorBubble = ['text', 'image'];

interface QuestionnaireRenderProps {
  blockId: string;
  nextBlockId?: string;
}

const QuestionnaireRender = ({ blockId, nextBlockId }: QuestionnaireRenderProps) => {
  const {
    block,
    nextBlockType,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSealedMultipleAnswer,
    handleImageSelection,
    handleSealedImageSelection,
  } = useQuestionnaire(blockId, { nextBlockId });

  const nextBlockUser = ProfessorBubble.includes(nextBlockType) ? 'professor' : 'student';
  const user = ProfessorBubble.includes(block.type) ? 'professor' : 'student';
  const last = useLSelector((state) => state.questionnaire.last);
  const isLastBubbleSide = user !== nextBlockUser;
  const profProgram = useLSelector((state) => state.questionnaire?.questionnaire?.teacher?.image);

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
      case 'multiple-choice':
        return (
          <QuestionnaireMultipleAnswer
            key={'bubble-inner-' + block.id}
            options={block.options}
            onPress={() => handleSealedMultipleAnswer(block.id)}
            correctAnswers={block.correctAnswer}
            points={block.points ?? 0}
            onChange={handleMultipleAnswer}
            sealed={!(last === block.id)}
          />
        );
      case 'single-choice':
        return (
          <QuestionnaireMultipleAnswer
            key={'bubble-inner-' + block.id}
            options={block.options}
            onChange={(id) => handleSingleAnswer(id)}
            correctAnswers={block.correctAnswer}
            sealed={!(last === block.id)}
            points={block?.pointsAwarded ?? 0}
            isSingleAnswer
          />
        );
      case 'carousel':
        return (
          <QuestionnaireImgAnswer
            items={block.imgOptions}
            onSelect={handleImageSelection}
            onPress={() => handleSealedImageSelection(block.id)}
            sealed={!(last === block.id)}
            correctAnswerId={block?.correctAnswer?.[0]}
            isImgSelectedCorrect={block.value === block?.correctAnswer?.[0]}
            points={block?.pointsAwarded}
          />
        );
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

export default QuestionnaireRender;

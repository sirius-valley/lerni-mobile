import TextBubble from '../../../bubbles/TextBubble';
import ImageBubble from '../../../bubbles/ImageBubble';
import Avatar from '../../../common/Avatar';
import QuestionnaireMultipleAnswer from '../../../bubbles/QuestionnaireAnswer';
import QuestionnaireImgAnswer from '../../../bubbles/QuestionnaireImgAnswer';
import useQuestionnaire from '../../../../hooks/useQuestionnaire';

type UserType = 'professor' | 'student';

interface QuestionnaireBubbleToRenderProps {
  isLastBubbleSide: boolean;
  profProgram: string;
  user: UserType;
  blockId: string;
  nextBlockId: string;
  last: string;
}

const QuestionnaireBubbleToRender = ({
  isLastBubbleSide,
  profProgram,
  user,
  blockId,
  nextBlockId,
  last,
}: QuestionnaireBubbleToRenderProps) => {
  const {
    block,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSealedMultipleAnswer,
    // handleImageSelection,
    // handleSealedImageSelection,
  } = useQuestionnaire(blockId, { nextBlockId });

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
          points={block?.pointsAwarded ?? 0}
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
      return <QuestionnaireImgAnswer blockId={blockId} nextBlockId={nextBlockId} />;
  }
};

export default QuestionnaireBubbleToRender;

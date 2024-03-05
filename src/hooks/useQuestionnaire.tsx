import { useLDispatch, useLSelector } from '../redux/hooks';
import {
  getQuestionnaireByID,
  getQuestionnaireTypeByID,
  handleMultipleAnswerChange,
  setSingleAnswer,
} from '../redux/slice/questionnaire.slice';
import { useAnswerQuestionnaireMutation } from '../redux/service/questionnaire.service';
import { useLocalSearchParams } from 'expo-router';
import { setCarousel } from '../redux/slice/questionnaire.slice';

interface useVirtualizedPillArgs {
  nextBlockId?: string;
}

const useQuestionnaire = (questionId: string, { nextBlockId }: useVirtualizedPillArgs) => {
  const dispatch = useLDispatch();
  const { questionnaireId } = useLocalSearchParams();

  const blockDetails = useLSelector((state) => getQuestionnaireByID(state, { id: questionId }));
  const nextBlockType = useLSelector((state) =>
    nextBlockId ? getQuestionnaireTypeByID(state, { id: nextBlockId }) : '',
  );
  const [answer, { data }] = useAnswerQuestionnaireMutation();

  const handleSingleAnswer = (answerId: string) => {
    dispatch(setSingleAnswer({ id: questionId, value: answerId }));
    answer({
      questionnaireId: questionnaireId as string,
      questionId: blockDetails.id,
      answer: answerId,
    });
  };

  const handleMultipleAnswer = (answerId: string) => {
    dispatch(handleMultipleAnswerChange({ id: questionId, value: answerId }));
  };

  const handleSealedMultipleAnswer = (answerId: string) => {
    answer({
      questionnaireId: questionnaireId as string,
      questionId: blockDetails.id,
      answer: blockDetails.options.reduce((acc: string[], option: any) => {
        if (option.selected === true) {
          return [...acc, option.id];
        } else {
          return acc;
        }
      }, []),
    });
  };

  const handleCarousel = (carouselBlockDetails: any) => {
    answer({
      questionnaireId: questionnaireId as string,
      questionId: blockDetails.id,
      answer: carouselBlockDetails.imgOptions.find((item: any) => item.selected)!.image,
    }).then(() => {
      dispatch(setCarousel({ carouselBlockDetails }));
    });
  };

  return {
    block: blockDetails,
    nextBlockType,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSealedMultipleAnswer,
    handleCarousel,
  };
};

export default useQuestionnaire;

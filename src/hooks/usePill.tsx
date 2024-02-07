import { useLDispatch, useLSelector } from '../redux/hooks';
import {
  getPillByID,
  getPillTypeByID,
  setCarousel,
  setFreeTextAnswer,
  setMultipleAnswer,
  setSelectCarousel,
  setSelectMultipleAnswer,
  setSingleAnswer,
} from '../redux/slice/pill.slice';
import { useAnswerMutation } from '../redux/service/pills.service';

interface useVirtualizedPillArgs {
  nextBlockId?: string;
}

const usePill = (questionId: string, { nextBlockId }: useVirtualizedPillArgs) => {
  const pillDetails = useLSelector((state) => state.pill.pill);
  const blockDetails = useLSelector((state) => getPillByID(state, { id: questionId }));
  const nextBlockType = useLSelector((state) =>
    nextBlockId ? getPillTypeByID(state, { id: nextBlockId }) : '',
  );
  const dispatch = useLDispatch();
  const [answer, { isLoading }] = useAnswerMutation();

  const handleSingleAnswer = (answerId: string) => {
    dispatch(setSingleAnswer({ id: questionId, value: answerId }));
    answer({ pillId: pillDetails!.pill.id, questionId: questionId, answer: answerId });
  };

  const handleMultipleAnswer = () => {
    answer({ pillId: pillDetails!.pill.id, questionId: questionId, answer: blockDetails.options.reduce((acc: string[],option: any) => {
      if(option.selected){
        return [
          ...acc,
          option.value
        ]
      }else{
        return acc
      }
    }, []) });
  };

  const handleSelectMultipleAnswer = (answerId: string) => {
    dispatch(setSelectMultipleAnswer({ id: questionId, value: answerId }));
  };

  const handleCarousel = (answerId: string) => {
    dispatch(setCarousel({id: questionId, value: answerId}));
  };

  const handleSelectCarousel = (answerId: string) => {
    dispatch(setSelectCarousel({ id: questionId, value: answerId }))
  }

  const handleSendAnswer = (valueToSend: string) => {
    answer({ pillId: pillDetails!.pill.id, questionId: questionId, answer: valueToSend });
  };

  const handleFreeTextAnswer = (value: string) => {
    dispatch(setFreeTextAnswer({ id: questionId, value }));
  };

  return {
    block: blockDetails,
    nextBlockType,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSelectMultipleAnswer,
    handleCarousel,
    handleSelectCarousel,
    handleFreeTextAnswer,
    handleSendAnswer,
    isLoading,
  };
};

export default usePill;

import { useLDispatch, useLSelector } from '../redux/hooks';
import {
  getPillByID,
  getPillTypeByID,
  setFreeTextAnswer,
  setMultipleAnswer,
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

  const handleMultipleAnswer = (answerId: string) => {
    dispatch(setMultipleAnswer({ id: questionId, value: answerId }));
  };

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
    handleFreeTextAnswer,
    handleSendAnswer,
    isLoading,
  };
};

export default usePill;

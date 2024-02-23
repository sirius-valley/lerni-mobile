import { useState } from 'react';
import { useLDispatch, useLSelector } from '../redux/hooks';
import {
  handleMultipleAnswerChange,
  nextQuestion,
  setSingleAnswer,
  sendMultipleAnswer,
  handleImageSelectionChange,
  sendImageSelected,
} from '../redux/slice/questionnaire.slice';
import {
  getQuestionnaireByID,
  getQuestionnaireById,
  getQuestionnaireTypeByID,
} from '../redux/slice/questionnaire.slice';

interface useVirtualizedPillArgs {
  nextBlockId?: string;
}

const useQuestionnaire = (questionId: string, { nextBlockId }: useVirtualizedPillArgs) => {
  const dispatch = useLDispatch();
  const blockDetails = useLSelector((state) => getQuestionnaireByID(state, { id: questionId }));
  const nextBlockType = useLSelector((state) =>
    nextBlockId ? getQuestionnaireTypeByID(state, { id: nextBlockId }) : '',
  );

  const handleSingleAnswer = (answerId: string) => {
    dispatch(setSingleAnswer({ id: questionId, value: answerId }));
    setTimeout(() => {
      dispatch(nextQuestion({}));
    }, 500);
  };

  const handleMultipleAnswer = (answerId: string) => {
    dispatch(handleMultipleAnswerChange({ id: questionId, value: answerId }));
  };

  const handleSealedMultipleAnswer = (answerId: string) => {
    dispatch(sendMultipleAnswer({ id: answerId }));
    setTimeout(() => {
      dispatch(nextQuestion({}));
    }, 500);
  };

  const handleImageSelection = (answerId: string) => {
    dispatch(handleImageSelectionChange({ id: questionId, value: answerId }));
  };

  const handleSealedImageSelection = (answerId: string) => {
    dispatch(sendImageSelected({ id: answerId }));
    setTimeout(() => {
      dispatch(nextQuestion({}));
    }, 500);
  };

  return {
    block: blockDetails,
    nextBlockType,
    handleSingleAnswer,
    handleMultipleAnswer,
    handleSealedMultipleAnswer,
    handleImageSelection,
    handleSealedImageSelection,
  };
};

export default useQuestionnaire;

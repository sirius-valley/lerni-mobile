import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useLDispatch, useLSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { restartAnswer } from '../redux/slice/trivia.slice';

const useTrivia = () => {
  const dispatch = useLDispatch();
  const { triviaId } = useLocalSearchParams();
  const [currentQuestionTimesup, setCurrentQuestionTimesup] = useState(false);
  const isTriviaIdAString = typeof triviaId === 'string';
  const trivia = useLSelector((state) => state.trivia.trivia);
  const {
    data: triviaData,
    error: triviaError,
    isLoading: triviaLoading,
    isSuccess: triviaSuccess,
  } = useTriviaByIdQuery(
    { triviaId: triviaId as string },
    {
      skip: !triviaId,
    },
  );
  const [
    answerQuestion,
    { data: answerData, error: answerError, isLoading: answerLoading, isSuccess: answerSuccess },
  ] = useAnswerTriviaMutation();

  const handleSendAnswer = (questionId: string, answer: string) => {
    if (answer === 'timeout') {
      setCurrentQuestionTimesup(true);
    }
    if (isTriviaIdAString) {
      const body = {
        triviaId: triviaId,
        questionId: questionId,
        answer: answer,
      };
      answerQuestion(body);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentQuestionTimesup || trivia?.questions[0]?.userAnswer) dispatch(restartAnswer());
      setCurrentQuestionTimesup(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [currentQuestionTimesup, trivia]);

  return {
    opponent: triviaData?.opponent,
    currentQuestion: {
      id: trivia?.questions[trivia.questions.length - 1]?.id,
      question: trivia?.questions[trivia.questions.length - 1]?.question,
      answer: trivia?.questions[trivia.questions.length - 1]?.userAnswer,
      correctOption: trivia?.questions[trivia.questions.length - 1]?.correctOption,
      status: trivia?.questions[trivia.questions.length - 1]?.status,
      timesup: currentQuestionTimesup,
    },
    currentOptions: trivia?.questions[trivia.questions.length - 1]?.options,
    handleSendAnswer,
    trivia,
  };
};

export default useTrivia;

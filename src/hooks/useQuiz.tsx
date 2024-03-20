import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useLDispatch, useLSelector } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { restartAnswer, setTimesup } from '../redux/slice/trivia.slice';
import { useTimer } from 'react-timer-hook';

const useTrivia = () => {
  const dispatch = useLDispatch();
  const { triviaId } = useLocalSearchParams();
  const currentQuestion = useLSelector((state) => state.trivia.currentQuestion);
  const triviaStatus = useLSelector((state) => state.trivia.status);
  const isTriviaIdAString = typeof triviaId === 'string';
  const timeToAnswer = useLSelector((state) => state.trivia.timeToAnswer);
  const totalQuestionsNumber = useLSelector((state) => state.trivia.totalQuestionsNumber);
  const opponent = useLSelector((state) => state.trivia.opponent);
  const answerHistory = useLSelector((state) => state.trivia.answersHistory);

  const currentUserData = useLSelector((state) => state.student);

  const setCurrentQuestionTimesup = (value: boolean) => {
    dispatch(setTimesup(value));
  };

  const { seconds, restart } = useTimer({
    autoStart: false,
    expiryTimestamp: new Date(Date.now() + 20000),
    // onExpire: () => handleTimeout('timeout'),
  });

  const {
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

  const isRequestLoading = triviaLoading || answerLoading;

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
    const isTriviaInProgress = triviaStatus === 'In Progress';
    if (timeToAnswer && isTriviaInProgress) {
      const customDate = Date.now() + timeToAnswer * 1000;
      restart(new Date(customDate));
    }
  }, [timeToAnswer, triviaStatus]);

  useEffect(() => {
    if (seconds === 0 && !Number.isNaN(seconds))
      handleSendAnswer(currentQuestion.nextQuestionId ?? '', 'timeout');
  }, [seconds]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentQuestion.timesup || currentQuestion?.answer) {
        dispatch(restartAnswer());
      }
      setCurrentQuestionTimesup(false);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [currentQuestion.timesup, currentQuestion.answer]);

  return {
    opponent,
    currentUser: {
      imgUrl: currentUserData.image,
      firstName: currentUserData.name,
      lastName: currentUserData.lastname,
    },
    answerHistory,
    currentQuestion,
    handleSendAnswer,
    timeToAnswer: seconds,
    triviaStatus,
    totalQuestionsNumber,
    isRequestLoading,
  };
};

export default useTrivia;

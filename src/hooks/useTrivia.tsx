import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useLDispatch, useLSelector } from '../redux/hooks';
import { useEffect, useRef } from 'react';
import { getTriviaNextQuestion, setAppActiveAgain, setTimesup } from '../redux/slice/trivia.slice';
import { useTimer } from 'react-timer-hook';
import { showToast } from '../redux/slice/utils.slice';
import { CustomError } from '../redux/service/api';
import { AppState } from 'react-native';
import { useMeQuery } from '../redux/service/student.service';

const useTrivia = () => {
  const dispatch = useLDispatch();
  const { triviaId } = useLocalSearchParams();
  const appState = useRef(AppState.currentState);

  const currentQuestion = useLSelector((state) => state.trivia.currentQuestion);
  const triviaStatus = useLSelector((state) => state.trivia.triviaStatus);
  const isTriviaIdAString = typeof triviaId === 'string';
  const timeToAnswer = useLSelector((state) => state.trivia.timeToAnswer);
  const totalQuestionsNumber = useLSelector((state) => state.trivia.totalQuestionsNumber);
  const opponent = useLSelector((state) => state.trivia.opponent);
  const answerHistory = useLSelector((state) => state.trivia.answersHistory);

  const { data: currentUserData } = useMeQuery();

  const { seconds, restart, pause } = useTimer({
    autoStart: false,
    expiryTimestamp: new Date(Date.now() + 20000),
  });

  const {
    error: triviaError,
    isLoading: triviaLoading,
    isSuccess: triviaSuccess,
  } = useTriviaByIdQuery({ triviaId: triviaId as string }, { skip: !triviaId });

  const [
    answerQuestion,
    { data: answerData, error: answerError, isLoading: answerLoading, isSuccess: answerSuccess },
  ] = useAnswerTriviaMutation();

  const isRequestLoading = triviaLoading || answerLoading;
  const didRequestFailed = triviaError || answerError;

  const setCurrentQuestionTimesup = (value: boolean) => dispatch(setTimesup(value));
  const setAppActive = () => dispatch(setAppActiveAgain());
  const nextQuestion = () => dispatch(getTriviaNextQuestion());

  const restartTimer = () => {
    const customDate = Date.now() + timeToAnswer * 1000;
    restart(new Date(customDate));
  };

  const handleSendAnswer = (answer: string) => {
    pause();
    if (answer === 'timeout') {
      setCurrentQuestionTimesup(true);
    }
    if (isTriviaIdAString) {
      const body = {
        triviaMatchId: triviaId,
        questionId: currentQuestion.nextQuestionId,
        answer: answer,
      };
      answerQuestion(body);
    }
  };

  // Starts timer at first time.
  useEffect(() => {
    const isTriviaInProgress = triviaStatus === 'In Progress';
    if (timeToAnswer && isTriviaInProgress) restartTimer();
  }, [timeToAnswer, triviaStatus]);

  // Handle timeout
  useEffect(() => {
    if (seconds === 0 && !Number.isNaN(seconds)) handleSendAnswer('timeout');
  }, [seconds]);

  // Bring next question and timer handling.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        (currentQuestion.timesup || currentQuestion.correctOption) &&
        !didRequestFailed &&
        !currentQuestion.userLeft
      ) {
        nextQuestion();
        restartTimer();
      }
      setCurrentQuestionTimesup(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentQuestion.timesup, currentQuestion, didRequestFailed]);

  // Handles when user minimizeses the appication
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (['background'].includes(appState.current) && nextAppState === 'active') {
        setAppActive();
      }
      if (['background'].includes(AppState.currentState)) {
        handleSendAnswer('left');
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  });

  // Error handling and dispatch to toast.
  useEffect(() => {
    if (didRequestFailed) {
      const parsedAnswerError = answerError as CustomError;
      const parsedTriviaError = triviaError as CustomError;

      const errorMessage =
        parsedTriviaError?.data?.message ?? parsedAnswerError?.data?.message ?? 'Algo salio mal';

      dispatch(showToast({ type: 'error', text: errorMessage }));
    }
  }, [didRequestFailed]);

  // Trivia status is finished
  useEffect(() => {
    if (triviaStatus !== 'In Progress') {
      pause();
    }
  }, []);

  return {
    opponent,
    currentUser: {
      imgUrl: currentUserData?.image,
      firstName: currentUserData?.name,
      lastName: currentUserData?.lastname,
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

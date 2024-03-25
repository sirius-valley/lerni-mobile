import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useLDispatch, useLSelector } from '../redux/hooks';
import { useEffect, useRef } from 'react';
import { getTriviaNextQuestion, setAppActiveAgain, setTimesup } from '../redux/slice/trivia.slice';
import { useTimer } from 'react-timer-hook';
import { showToast } from '../redux/slice/utils.slice';
import { CustomError } from '../redux/service/api';
import { AppState, BackHandler, Alert } from 'react-native';
import { useMeQuery } from '../redux/service/student.service';

const useTrivia = () => {
  const dispatch = useLDispatch();
  const { triviaId } = useLocalSearchParams();
  const router = useRouter();
  const appState = useRef(AppState.currentState);

  const currentQuestion = useLSelector((state) => state.trivia.currentQuestion);
  const triviaStatus = useLSelector((state) => state.trivia.triviaStatus);
  const isTriviaIdAString = typeof triviaId === 'string';
  const timeToAnswer = useLSelector((state) => state.trivia.timeToAnswer);
  const totalQuestionsNumber = useLSelector((state) => state.trivia.totalQuestionsNumber);
  const opponent = useLSelector((state) => state.trivia.opponent);
  const answerHistory = useLSelector((state) => state.trivia.answersHistory);

  const { data: currentUserData } = useMeQuery();

  const { seconds, isRunning, restart, pause } = useTimer({
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
  const goToExplore = () => router.push('(auth)/explore');
  const exitTrivia = () => isRunning && handleSendAnswer('left');

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
    pause();
    setAppActive();
    const isTriviaInProgress = triviaStatus === 'In Progress';
    if (timeToAnswer && isTriviaInProgress) restartTimer();
  }, [timeToAnswer, triviaStatus]);

  // Handle timeout
  useEffect(() => {
    if (seconds === 0 && !Number.isNaN(seconds) && triviaStatus === 'In Progress') {
      handleSendAnswer('timeout');
    }
  }, [seconds, triviaStatus]);

  // Bring next question and timer handling.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (
        (currentQuestion.correctOption || currentQuestion.timesup) &&
        !didRequestFailed &&
        !currentQuestion.userLeft
      ) {
        nextQuestion();
        restartTimer();
      }
      setCurrentQuestionTimesup(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [
    currentQuestion.correctOption,
    currentQuestion.timesup,
    currentQuestion.userLeft,
    didRequestFailed,
  ]);

  // Handles when user minimizeses the appication
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (['background', 'inactive'].includes(appState.current) && nextAppState === 'active') {
        setAppActive();
      }
      if (['background', 'inactive'].includes(AppState.currentState)) {
        exitTrivia();
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  });

  // Back button handler on Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Si sales perderas la pregunta', 'Estas seguro de que deseas salir?', [
        {
          text: 'Quedarse',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Ir a explore',
          onPress: () => {
            exitTrivia();
            goToExplore();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
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

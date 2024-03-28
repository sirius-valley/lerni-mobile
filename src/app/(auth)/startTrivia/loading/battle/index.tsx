import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components/native';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../../components/styled/styles';
import AnswerButton from '../../../../../components/trivia/AnswerButton';
import { Countdown } from '../../../../../components/trivia/Countdown';
import PlayersHeader from '../../../../../components/trivia/PlayersHeader';
import Question from '../../../../../components/trivia/Question';
import useTrivia from '../../../../../hooks/useTrivia';
import { Animated, Dimensions, Platform } from 'react-native';
import TriviaResult from '../../../../../components/trivia/TriviaResult';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';
import { useRouter } from 'expo-router';
import { Swipeable } from 'react-native-gesture-handler';

const battle = () => {
  const {
    opponent,
    currentUser,
    answerHistory,
    currentQuestion,
    handleSendAnswer,
    timeToAnswer,
    triviaStatus,
    totalQuestionsNumber,
    isRequestLoading,
  } = useTrivia();
  const [showTimer, setShowTimer] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const screenHeight = Dimensions.get('screen').height;

  const insets = useSafeAreaInsets();
  const box1Height = useRef(new Animated.Value(0)).current;
  const box2Height = useRef(new Animated.Value(screenHeight)).current;
  const box1Opacity = useRef(new Animated.Value(1)).current;

  const handleResultScreenPress = () => {
    router.replace({
      pathname: '(auth)/trivia',
    });
    // Sets Android navigation bar visible back again when leave the screen
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('visible');
    }
  };

  const handleAnswer = (answer: string) => {
    handleSendAnswer(answer);
    setShowTimer(false);
  };

  const getQuestionStatus = () => {
    if (isRequestLoading) return 'loading';
    if (currentQuestion.timesup) return 'timeout';
    if (currentQuestion.status === 'correct') return 'correct';
    if (currentQuestion.status === 'incorrect') return 'incorrect';
    return 'default';
  };

  const getResultStatus = () => {
    if (triviaStatus === 'Lost') return 'failed';
    if (triviaStatus === 'Won') return 'success';
    return 'completed';
  };

  useEffect(() => {
    if (
      !currentQuestion.timesup &&
      !currentQuestion.answer &&
      !currentQuestion.userLeft &&
      currentQuestion.status === 'default'
    )
      setShowTimer(true);
  }, [currentQuestion]);

  const animateBoxes = () => {
    Animated.parallel([
      Animated.timing(box1Height, {
        toValue: screenHeight,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(box2Height, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.timing(box1Opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    if (triviaStatus !== 'In Progress') {
      setTimeout(() => {
        animateBoxes();
      }, 800);
    }
  }, [triviaStatus]);

  // Hides navigation bar on android phones.
  const setAndroidNavigationBehaviour = async () =>
    await NavigationBar.setBehaviorAsync('overlay-swipe');

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setVisibilityAsync('hidden');
      setAndroidNavigationBehaviour();
    }

    return () => {
      if (Platform.OS === 'android') {
        NavigationBar.setVisibilityAsync('visible');
        setShowTimer(false);
      }
    };
  }, []);

  return (
    <Swipeable
      onSwipeableOpen={() => {
        // Redefine this function to do nothing when user swipes back.
      }}
    >
      <Animated.View
        style={{
          opacity: box1Opacity,
          height: box2Height as unknown as number,
          overflow: 'hidden',
          paddingHorizontal: 24,
          gap: 24,
        }}
      >
        <StyledColumn
          css={{
            gap: 32,
            paddingTop: insets.top + 30,
          }}
        >
          <StyledRow css={{ justifyContent: 'space-between' }}>
            <StyledText css={{ color: theme.white }} variant={'body1'}>
              {Number(currentQuestion?.questionNumber ?? 0) <= totalQuestionsNumber &&
                `Ronda ${Number(currentQuestion?.questionNumber ?? 0)}/${totalQuestionsNumber} `}
            </StyledText>
            <StyledBox
              css={{
                height: 23,
              }}
            >
              {!isRequestLoading && showTimer && <Countdown time={timeToAnswer} />}
            </StyledBox>
          </StyledRow>
          <PlayersHeader
            currentUser={currentUser}
            answerHistory={answerHistory}
            opponent={opponent}
            totalQuestions={totalQuestionsNumber}
          />
          <Question
            question={currentQuestion.question ?? ''}
            loading={isRequestLoading}
            status={getQuestionStatus()}
          />
        </StyledColumn>

        <StyledColumn css={{ gap: 16, paddingBottom: 80 }}>
          {currentQuestion.options?.map((option, idx) => (
            <AnswerButton
              key={idx}
              answer={option}
              onPress={handleAnswer}
              selected={
                typeof currentQuestion.answer === 'string' && currentQuestion.answer === option
              }
              correctAnswer={currentQuestion.correctOption}
              selectedIsWrong={
                typeof currentQuestion.answer === 'string' &&
                currentQuestion.answer !== currentQuestion.correctOption &&
                currentQuestion.answer === option
              }
              loading={isRequestLoading}
              showCorrect={
                currentQuestion.timesup || !!currentQuestion.answer || currentQuestion.userLeft
              }
            />
          ))}
        </StyledColumn>
      </Animated.View>
      <Animated.View
        style={{
          height: box1Height as unknown as number,
          overflow: 'hidden',
        }}
      >
        <StyledBox css={{ height: screenHeight, flex: 1 }}>
          <TriviaResult type={getResultStatus()} onPress={handleResultScreenPress} />
        </StyledBox>
      </Animated.View>
    </Swipeable>
  );
};

export default battle;

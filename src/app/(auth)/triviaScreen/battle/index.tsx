import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../components/styled/styles';
import AnswerButton from '../../../../components/trivia/AnswerButton';
import { Countdown } from '../../../../components/trivia/Countdown';
import PlayersHeader from '../../../../components/trivia/PlayersHeader';
import Question from '../../../../components/trivia/Question';
import useTrivia from '../../../../hooks/useQuiz';

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
  // const [fakeLoading, setFakeLoading] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const theme = useTheme();

  const handleAnswer = (answer: string) => {
    handleSendAnswer(currentQuestion.nextQuestionId ?? '', answer);
    setStartTimer(false);
  };

  const getQuestionStatus = () => {
    if (isRequestLoading) return 'loading';
    if (currentQuestion.timesup) return 'timeout';
    if (triviaStatus === 'Won') return 'correct';
    if (triviaStatus === 'Lost') return 'incorrect';
    return 'default';
  };

  useEffect(() => {
    if (!currentQuestion.timesup && !currentQuestion.answer) setStartTimer(true);
  }, [currentQuestion]);

  return (
    <StyledBox
      css={{
        gap: 24,
      }}
    >
      <StyledColumn css={{ gap: 32 }}>
        <StyledRow css={{ justifyContent: 'space-between' }}>
          <StyledText css={{ color: theme.white }} variant={'body1'}>
            {`Ronda ${Number(currentQuestion?.questionNumber ?? 0)}/${totalQuestionsNumber} `}
          </StyledText>
          <StyledBox
            css={{
              height: 23,
            }}
          >
            {!isRequestLoading && startTimer && <Countdown time={timeToAnswer} />}
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
      <StyledColumn css={{ gap: 16 }}>
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
            showCorrect={currentQuestion.timesup || !!currentQuestion.answer}
          />
        ))}
      </StyledColumn>
    </StyledBox>
  );
};

export default battle;

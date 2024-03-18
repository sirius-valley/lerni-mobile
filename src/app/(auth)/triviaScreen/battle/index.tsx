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
import useTrivia from '../../../../hooks/useTrivia';

const battle = () => {
  const { currentQuestion, currentOptions, handleSendAnswer } = useTrivia();
  const [fakeLoading, setFakeLoading] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const theme = useTheme();

  const handleAnswer = (answer: string) => {
    handleSendAnswer(currentQuestion?.id ?? '', answer);
    setStartTimer(false);
    setFakeLoading(true);
  };

  const getQuestionStatus = () => {
    if (fakeLoading) return 'loading';
    if (currentQuestion.timesup) return 'timeout';
    if (currentQuestion.status === 'Won') return 'correct';
    if (currentQuestion.status === 'Lost') return 'incorrect';
    return 'default';
  };
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    if (currentQuestion.answer)
      setTimeout(() => {
        setFakeLoading(false);
      }, 1500);
  }, [currentQuestion]);

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
            {`Ronda ${Number(currentQuestion.id) + 1}/${questions.length} `}
          </StyledText>
          <StyledBox
            css={{
              height: 23,
            }}
          >
            {!fakeLoading && startTimer && <Countdown time={7} handleTimeout={handleAnswer} />}
          </StyledBox>
        </StyledRow>
        <PlayersHeader />
        <Question
          question={currentQuestion.question ?? ''}
          loading={fakeLoading}
          status={getQuestionStatus()}
        />
      </StyledColumn>
      <StyledColumn css={{ gap: 16 }}>
        {currentOptions?.map((option, idx) => (
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
            loading={fakeLoading}
            showCorrect={currentQuestion.timesup || !!currentQuestion.answer}
          />
        ))}
      </StyledColumn>
    </StyledBox>
  );
};

export default battle;

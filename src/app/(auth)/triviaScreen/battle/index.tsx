import { useState } from 'react';
import { ScrollView } from 'react-native';
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
  const { currentQuestion, currentOptions, handleSendAnswer, handleChange } = useTrivia();
  const [loading, setLoading] = useState(false);
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const theme = useTheme();

  const handleAnswer = (answer: string) => {
    handleChange(currentQuestion.id, answer);
    handleSendAnswer();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 24,
      }}
      showsVerticalScrollIndicator={false}
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
            {!loading && <Countdown time={20} handleTimeout={handleAnswer} />}
          </StyledBox>
        </StyledRow>
        <PlayersHeader />
        <Question question={currentQuestion.question} />
      </StyledColumn>
      <StyledColumn css={{ gap: 16 }}>
        {currentOptions.map((option, idx) => (
          <AnswerButton
            key={idx}
            answer={option.text}
            onPress={handleAnswer}
            selected={
              typeof currentQuestion.answer === 'string'
                ? currentQuestion.answer === option.text
                : undefined
            }
          />
        ))}
      </StyledColumn>
    </ScrollView>
  );
};

export default battle;

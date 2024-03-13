import CustomError from '../../../../components/common/ErrorDisplay/CustomError';
import WIPIllustration from '../../../../../assets/icons/WIPIllustration';
import { ScrollView } from 'react-native';
import { StyledColumn, StyledRow, StyledText } from '../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import PlayersHeader from '../../../../components/trivia/PlayersHeader';
import Question from '../../../../components/trivia/Question';
import AnswerButton from '../../../../components/trivia/AnswerButton';
import useTrivia from '../../../../hooks/useTrivia';
import { useEffect, useState } from 'react';

export default function Page() {
  const { currentQuestion, currentOptions, handleSendAnswer, handleChange } = useTrivia();

  const handleAnswer = (answer: string) => {
    handleChange(currentQuestion.id, answer);
    handleSendAnswer();
    console.log('enviado', currentQuestion, answer);
  };

  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const theme = useTheme();
  const [contdown, setContdown] = useState(20);
  useEffect(() => {
    if (contdown === 0) {
      setContdown(20);
    } else if (contdown > 0) {
      setTimeout(() => {
        setContdown(contdown - 1);
      }, 1000);
    }
  }, [contdown, currentQuestion]);

  return (
    // <CustomError
    //   Icon={WIPIllustration}
    //   title={'Página en construcción'}
    //   content={'El contenido que querés acceder \n no esta disponible ahora.'}
    //   buttonText={'Ir a Explorar'}
    // />
    <ScrollView
      contentContainerStyle={{
        gap: 24,
        paddingBottom: 24,
      }}
      showsVerticalScrollIndicator={false}
    >
      <StyledColumn css={{ gap: 32 }}>
        <StyledRow css={{ justifyContent: 'space-between' }}>
          <StyledText css={{ color: theme.white }} variant={'body1'}>
            {`Ronda ${Number(currentQuestion.id) + 1}/${questions.length} `}
          </StyledText>
          <StyledText css={{ color: theme.primary500 }} variant={'h2'}>
            {`${contdown}''`}
          </StyledText>
        </StyledRow>
        <PlayersHeader />
        <Question question={currentQuestion.question} />
      </StyledColumn>
      <StyledColumn css={{ gap: 16 }}>
        {currentOptions.map((option) => (
          <AnswerButton
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
}

import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import { Image } from 'react-native';
import React from 'react';
import { useTheme } from 'styled-components';
import Spinner from '../../common/Spinner';
import { StatusStyledText, TriviaQuestionContainer } from './styles';

export type QuestionPropsStatus = 'default' | 'correct' | 'incorrect' | 'loading' | 'timeout';

interface QuestionProps {
  question: string;
  loading: boolean;
  status: QuestionPropsStatus;
}

const Question = ({ question, loading, status }: QuestionProps) => {
  const theme = useTheme();
  const isFinished = ['correct', 'incorrect', 'timeout'].includes(status);

  const renderEndingMessage = () => {
    if (isFinished) {
      switch (status) {
        case 'correct':
          return <StatusStyledText status="correct">CORRECTO!</StatusStyledText>;
        case 'incorrect':
          return <StatusStyledText status="incorrect">INCORRECTO!</StatusStyledText>;
        default:
          return <StatusStyledText status="timeout">{`Se terminó\n el tiempo`}</StatusStyledText>;
      }
    }
    return null;
  };

  return (
    <StyledBox
      style={{ position: 'relative', height: 186, justifyContent: 'center', alignItems: 'center' }}
    >
      <TriviaQuestionContainer>
        <StyledText
          variant={'body1'}
          css={{
            fontFamily: 'Roboto-Bold',
            ...((loading || isFinished) && {
              opacity: 0.05,
            }),
          }}
        >
          {question}
        </StyledText>
        <StyledRow
          css={{
            position: 'absolute',
            zIndex: 3,
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {status === 'loading' && <Spinner color={theme.primary600} />}
          {renderEndingMessage()}
        </StyledRow>
      </TriviaQuestionContainer>
      <Image
        source={require('../../../../assets/background_question.png')}
        style={{
          width: 342,
          height: 186,
          position: 'absolute',
          top: 0,
        }}
      />
    </StyledBox>
  );
};
export default Question;

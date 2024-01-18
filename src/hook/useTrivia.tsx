import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Trivia, TriviaQuestion } from '../redux/service/types/trivia-responses.type';

const useTrivia = () => {
  const { triviaId } = useLocalSearchParams();
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

  const [trivia, setTrivia] = useState<TriviaQuestion[]>([
    {
      id: '1',
      question: '¿Cuál es la capital de Argentina?',
      answers: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
      userAnswer: 'Buenos Aires',
    },
  ]);

  const [index, setIndex] = useState<number>(0);

  const handleUpdateAnswer = (id: string, answer: string) => {
    const newTrivia = [...trivia];
    const questionIndex = newTrivia.findIndex((question) => question.id === id);
    newTrivia[questionIndex].userAnswer = answer;
    setTrivia(newTrivia);
  };

  const handleSendAnswer = () => {
    const lastBubble = trivia[trivia.length - 1];
    if (lastBubble.userAnswer) {
      const body = {
        triviaId: triviaId!,
        questionId: lastBubble.id,
        answer: lastBubble.userAnswer,
      };
      answerQuestion(body).then((response) => {
        if ('data' in response) {
          setTrivia([...trivia, response.data]);
        } else if ('error' in response) {
          const newTrivia = [...trivia].shift();
          const lastQuestion = trivia[trivia.length - 1];
        }
      });
    }
  };

  useEffect(() => {
    triviaSuccess && setTrivia(triviaData?.questions);
  }, [triviaSuccess]);

  return {
    opponent: triviaData?.opponent,
    currentQuestion: {
      question: trivia[index]?.question,
      answer: undefined,
    },
    currentOptions: trivia[index]?.answers,
  };
};

export default useTrivia;

import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { TriviaQuestion } from '../redux/service/types/trivia.response';
import usePrevious from './usePrevious';

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
      id: '0',
      question: '¿Cuál es la capital de Argentina?',
      answers: [
        {
          text: 'Buenos Aires',
          id: '1',
        },
        {
          text: 'Córdoba',
          id: '2',
        },
        {
          text: 'Rosario',
          id: '3',
        },
        {
          text: 'Mendoza',
          id: '4',
        },
      ],
      userAnswer: undefined,
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
          setIndex(index + 1);
        } else if ('error' in response) {
          const newTrivia = [...trivia].splice(0, -1);
          const lastQuestion = trivia[trivia.length - 1];
          setTimeout(() => {
            // newTrivia = [
            //     ...newTrivia,
            //     {
            //         ...lastQuestion,
            //         userAnswer: undefined,
            //
            //     }
            // ]
            // setTrivia(newTrivia);
            setTrivia([
              ...trivia,
              {
                id: String(index + 1),
                question: '¿Cuál es la capital de Argentina?' + index,
                answers: [
                  {
                    text: 'Buenos Aires',
                    id: '1',
                  },
                  {
                    text: 'Córdoba',
                    id: '2',
                  },
                  {
                    text: 'Rosario',
                    id: '3',
                  },
                  {
                    text: 'Mendoza',
                    id: '4',
                  },
                ],
                userAnswer: undefined,
              },
            ]);
            setIndex(index + 1);
          }, 2000);
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
      id: trivia[index]?.id,
      answer: trivia[index]?.userAnswer,
    },
    currentOptions: trivia[index]?.answers,
    handleChange: handleUpdateAnswer,
    handleSendAnswer,
    trivia,
  };
};

export default useTrivia;

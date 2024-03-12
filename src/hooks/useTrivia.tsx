import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { TriviaQuestion } from '../redux/service/types/trivia.response';

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
    console.log(id, answer, trivia);
    const newTrivia = [...trivia];
    console.log(newTrivia);
    const questionIndex = newTrivia.findIndex((question) => question.id === id);
    console.log(questionIndex);
    newTrivia[questionIndex].userAnswer = answer;
    setTrivia(newTrivia);
  };
  console.log(trivia);

  const handleSendAnswer = () => {
    const lastBubble = trivia[trivia.length - 1];
    if (lastBubble.userAnswer) {
      const body = {
        triviaId: triviaId!,
        questionId: lastBubble.id,
        answer: lastBubble.userAnswer,
      };
      answerQuestion(body).then((response) => {
        console.log(response);

        if ('data' in response) {
          console.log('success');
          setTrivia([...trivia, response.data]);
          setIndex(index + 1);
        } else if ('error' in response) {
          console.log('error');
          const newTrivia = [...trivia].splice(0, -1);
          const lastQuestion = trivia[trivia.length - 1];
          console.log(newTrivia, lastQuestion);
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
  };
};

export default useTrivia;

import { useAnswerTriviaMutation, useTriviaByIdQuery } from '../redux/service/trivia.service';
import { useLocalSearchParams } from 'expo-router';
import { useLSelector } from '../redux/hooks';

const useTrivia = () => {
  const { triviaId } = useLocalSearchParams();
  const isTriviaIdAString = typeof triviaId === 'string';
  const trivia = useLSelector((state) => state.trivia.trivia);
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

  const handleSendAnswer = (questionId: string, answer: string) => {
    if (isTriviaIdAString) {
      const body = {
        triviaId: triviaId,
        questionId: questionId,
        answer: answer,
      };
      answerQuestion(body);
    }
  };

  return {
    opponent: triviaData?.opponent,
    currentQuestion: {
      id: trivia?.questions[trivia.questions.length - 1]?.id,
      question: trivia?.questions[trivia.questions.length - 1]?.question,
      answer: trivia?.questions[trivia.questions.length - 1]?.userAnswer,
      correctOption: trivia?.questions[trivia.questions.length - 1]?.correctOption,
      status: trivia?.questions[trivia.questions.length - 1]?.status,
    },
    currentOptions: trivia?.questions[trivia.questions.length - 1]?.options,
    handleSendAnswer,
    trivia,
  };
};

export default useTrivia;

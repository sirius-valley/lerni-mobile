export type TriviaQuestion = {
  id: string;
  question: string;
  answers: { text: string; id: string }[];
  correctAnswer?: boolean;
  userAnswer?: string;
};

export type Trivia = {
  id: string;
  questions: TriviaQuestion[];
  opponent: {
    imgUrl: string;
    firstName: string;
    lastName: string;
  };
};

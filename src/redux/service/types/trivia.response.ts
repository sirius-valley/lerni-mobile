export type TriviaAnswerResponseStatus = 'Won' | 'Lost' | 'In Progress' | 'Waiting';

export type TriviaQuestion = {
  id: string;
  question: string;
  options: string[];
  correctOption?: string;
  userAnswer?: string;
  status: TriviaAnswerResponseStatus;
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

export interface TriviaAnswerQuestionsResponse {
  id: string;
  question: string;
  secondsToAnswer: number;
  options: string[];
}

export interface TriviaAnswerResponse {
  triviaQuestion: TriviaAnswerQuestionsResponse;
  isCorrect: boolean;
  status: TriviaAnswerResponseStatus;
  opponentAnsweredCorrectly?: boolean;
  correctOption: string;
}

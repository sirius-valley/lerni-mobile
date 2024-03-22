export type TriviaAnswerResponseStatus = 'Won' | 'Lost' | 'In Progress' | 'Waiting' | 'timeout';

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

export type AssignTriviaResponse = {
  triviaId: string;
  program: {
    id: string;
    name: string;
    icon: string;
    progress: number;
  };
  opponent: {
    id: string;
    name: string;
    lastname: string;
    image: string;
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

export interface TriviaHistoryCardProps {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    score: number;
    image: string;
  };
  opponent: {
    id: string;
    firstName: string;
    lastName: string;
    score: number;
    image: string;
  };
  triviaId: string;
  date: Date;
}

export interface TriviaQueryParams {
  page?: string;
}

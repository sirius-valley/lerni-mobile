export type TriviaAnswerResponseStatus = 'Won' | 'Lost' | 'In Progress' | 'Waiting' | 'Tied';

export type TriviaQuestion = {
  id: string;
  question: string;
  options: string[];
  correctOption?: string;
  userAnswer?: string;
  status: TriviaAnswerResponseStatus;
};

export type Trivia = {
  opponent: {
    id: string;
    image?: string;
    name: string;
    lastname: string;
  };
  status: TriviaAnswerResponseStatus;
  totalQuestionsNumber: number;
  questionNumber: number;
  question: {
    id: string;
    options: string[];
    question: string;
    secondsToAnswer: number;
  };
  answers: {
    me: {
      id: string;
      isCorrect: boolean;
    }[];
    opponent: {
      id: string;
      isCorrect: boolean;
    }[];
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
  correctOption: string;
  opponentAnswer?: {
    id: string;
    isCorrect: boolean;
  };
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

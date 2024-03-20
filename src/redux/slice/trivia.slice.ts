import { createSlice } from '@reduxjs/toolkit';
import { Trivia, TriviaAnswerResponseStatus } from '../service/types/trivia.response';
import { triviaApi } from '../service/trivia.service';
import { quizInitialState } from '../../utils/quizUtils';

interface InitialStateTriviaType {
  currentQuestion: {
    nextQuestionId: string;
    question: string;
    options: string[];
    correctOption?: string;
    answer?: string;
    timesup?: boolean;
    questionNumber?: number;
  };
  timeToAnswer: number;
  totalQuestionsNumber: number;
  answersHistory: {
    me: {
      id: string;
      isCorrect: boolean;
    }[];
    opponent: {
      id: string;
      isCorrect: boolean;
    }[];
  };
  status: TriviaAnswerResponseStatus;
  opponent: {
    imgUrl?: string;
    firstName?: string;
    lastName?: string;
  };
}

const initialState: InitialStateTriviaType = {
  currentQuestion: {
    nextQuestionId: '',
    question: '',
    options: [],
    timesup: false,
  },
  answersHistory: {
    me: [],
    opponent: [],
  },
  timeToAnswer: 0,
  totalQuestionsNumber: 0,
  status: 'In Progress',
  opponent: {},
};

export const triviaSlice = createSlice({
  name: 'triviaSlice',
  initialState,
  reducers: {
    restartAnswer: (state) => {
      if (state.currentQuestion) {
        state.currentQuestion.correctOption = undefined;
        state.currentQuestion.answer = undefined;
        state.status = 'In Progress';
      }
    },
    setTimesup: (state, action) => {
      state.currentQuestion.timesup = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(triviaApi.endpoints.triviaById.matchFulfilled, (state, action) => {
        state.totalQuestionsNumber = action.payload.totalQuestionsNumber;
        state.timeToAnswer = action.payload.question.secondsToAnswer;
        state.status = action.payload.status;
        state.answersHistory = action.payload.answers;
        state.currentQuestion = transformTriviaToCurrentQuestion(action.payload);
        state.opponent = action.payload.opponent;
        console.log('slice state', JSON.stringify(state, null, 3));
      })
      .addMatcher(triviaApi.endpoints.answerTrivia.matchPending, (state, action) => {
        const { answer } = action.meta.arg.originalArgs;
        console.log('trivia slice: ', answer);
        // if (Array.isArray(state.trivia?.options)) {
        //   const correctOption = 'Buenos Aires';
        //   state.currentQuestion.answer = answer;
        //   // 'Buenos Aires' correct answer hardcoded until POST answer endpoint is integrated.
        //   state.currentQuestion.correctOption = correctOption;
        //   state.currentQuestion.answer =
        //     correctOption === answer ? 'Won' : 'Lost';
        // }
      });
  },
});

const transformTriviaToCurrentQuestion = (trivia: Trivia) => {
  return {
    nextQuestionId: trivia.question.id,
    question: trivia.question.question,
    options: trivia.question.options.slice(0, 4),
    status: trivia.status,
    timesup: false,
    questionNumber: trivia.questionNumber,
  };
};

export const { restartAnswer, setTimesup } = triviaSlice.actions;

export default triviaSlice.reducer;

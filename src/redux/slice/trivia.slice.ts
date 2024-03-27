import { createSlice } from '@reduxjs/toolkit';
import { Trivia, TriviaAnswerResponseStatus } from '../service/types/trivia.response';
import { triviaApi } from '../service/trivia.service';

type CurrentQuestionStatusType = 'correct' | 'incorrect' | 'timeout' | 'default';

interface InitialStateTriviaType {
  currentQuestion: {
    nextQuestionId: string;
    question: string;
    options: string[];
    correctOption?: string;
    answer?: string;
    timesup: boolean;
    userLeft: boolean;
    questionNumber?: number;
    status: CurrentQuestionStatusType;
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
  triviaStatus: TriviaAnswerResponseStatus;
  opponent: {
    imgUrl?: string;
    firstName?: string;
    lastName?: string;
  };
  nextQuestion: {
    nextQuestionId: string;
    question: string;
    options: string[];
    correctOption?: string;
    answer?: string;
    timesup: boolean;
    userLeft: boolean;
    questionNumber?: number;
    status: CurrentQuestionStatusType;
  };
}

const initialState: InitialStateTriviaType = {
  currentQuestion: {
    nextQuestionId: '',
    question: '',
    options: [],
    timesup: false,
    userLeft: false,
    status: 'default',
  },
  answersHistory: {
    me: [],
    opponent: [],
  },
  timeToAnswer: 0,
  totalQuestionsNumber: 0,
  triviaStatus: 'In Progress',
  opponent: {},
  nextQuestion: {
    nextQuestionId: '',
    question: '',
    options: [],
    timesup: false,
    userLeft: false,
    status: 'default',
  },
};

export const triviaSlice = createSlice({
  name: 'triviaSlice',
  initialState,
  reducers: {
    setTimesup: (state, action) => {
      state.currentQuestion.timesup = action.payload;
    },
    getTriviaNextQuestion: (state) => {
      state.currentQuestion = state.nextQuestion;
      state.nextQuestion = {
        correctOption: undefined,
        nextQuestionId: '',
        question: '',
        options: [],
        timesup: false,
        userLeft: false,
        status: 'default',
      };
    },
    setAppActiveAgain: (state) => {
      state.currentQuestion.userLeft = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(triviaApi.endpoints.triviaById.matchFulfilled, (state, action) => {
        state.totalQuestionsNumber = action.payload.totalQuestionsNumber;
        state.timeToAnswer = action.payload.question.secondsToAnswer;
        state.triviaStatus = action.payload.status;
        state.answersHistory = action.payload.answers;
        state.currentQuestion = transformTriviaToCurrentQuestion(action.payload);
        state.opponent = {
          imgUrl: action.payload.opponent.image ?? '',
          firstName: action.payload.opponent.name ?? '',
          lastName: action.payload.opponent.lastname ?? '',
        };
      })
      .addMatcher(triviaApi.endpoints.answerTrivia.matchPending, (state, action) => {
        const { answer } = action.meta.arg.originalArgs;
        if (answer === 'timeout') {
          state.currentQuestion.timesup = true;
        } else if (answer === 'left') {
          state.currentQuestion.userLeft = true;
        } else {
          state.currentQuestion.answer = answer;
        }
      })
      .addMatcher(triviaApi.endpoints.answerTrivia.matchFulfilled, (state, action) => {
        const { isCorrect } = action.payload;

        if (action.payload.opponentAnswer) {
          state.answersHistory.opponent.push(action.payload.opponentAnswer);
        }
        state.answersHistory.me.push({ id: Math.random().toString().slice(0, 6), isCorrect });
        state.currentQuestion.status = isCorrect ? 'correct' : 'incorrect';
        state.currentQuestion.correctOption = action.payload.correctOption;
        if (action.payload.status === 'In Progress') {
          state.nextQuestion.options = action.payload.triviaQuestion.options;
          state.nextQuestion.question = action.payload.triviaQuestion.question;
          state.nextQuestion.nextQuestionId = action.payload.triviaQuestion.id;
          state.nextQuestion.timesup = false;
          state.nextQuestion.questionNumber = state.answersHistory.me.length + 1;
        }
        state.triviaStatus = action.payload.status;
      });
  },
});

const transformTriviaToCurrentQuestion = (trivia: Trivia) => {
  return {
    nextQuestionId: trivia.question.id,
    question: trivia.question.question,
    options: trivia.question.options,
    timesup: false,
    userLeft: false,
    questionNumber: trivia.questionNumber,
    status: 'default' as CurrentQuestionStatusType,
  };
};

export const { setTimesup, getTriviaNextQuestion, setAppActiveAgain } = triviaSlice.actions;

export default triviaSlice.reducer;

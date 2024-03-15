import { createSlice } from '@reduxjs/toolkit';
import { Trivia } from '../service/types/trivia.response';
import { triviaApi } from '../service/trivia.service';

interface InitialStateTriviaType {
  trivia?: Trivia;
}

const initialState: InitialStateTriviaType = {
  trivia: {
    id: 'triviaId01',
    questions: [
      {
        id: '0',
        question: '¿Cuál es la capital de Argentina?',
        options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
        correctOption: undefined,
        userAnswer: undefined,
        status: 'In Progress',
      },
    ],
    opponent: {
      imgUrl: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
      firstName: 'Nico',
      lastName: 'Di Pietro',
    },
  },
};

export const triviaSlice = createSlice({
  name: 'triviaSlice',
  initialState,
  reducers: {
    restartAnswer: (state) => {
      if (Array.isArray(state.trivia?.questions)) {
        state.trivia.questions[0].userAnswer = undefined;
        state.trivia.questions[0].status = 'In Progress';
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(triviaApi.endpoints.answerTrivia.matchPending, (state, action) => {
      const { answer, ...rest } = action.meta.arg.originalArgs;
      console.log('slice: ', answer, rest);
      if (Array.isArray(state.trivia?.questions)) {
        const correctOption = 'Buenos Aires';
        const questionsLength = state.trivia.questions.length;
        state.trivia.questions[questionsLength - 1].userAnswer = answer;
        // 'Buenos Aires' correct answer hardcoded until POST answer endpoint is integrated.
        state.trivia.questions[questionsLength - 1].correctOption = correctOption;
        state.trivia.questions[questionsLength - 1].status =
          correctOption === answer ? 'Won' : 'Lost';
      }
    });
  },
});

export const { restartAnswer } = triviaSlice.actions;

export default triviaSlice.reducer;

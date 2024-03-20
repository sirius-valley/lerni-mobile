import { Trivia } from '../redux/service/types/trivia.response';

export const quizInitialState: Trivia = {
  id: 'triviaId01',
  options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
  time: 20,
  opponent: {
    imgUrl: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
    firstName: 'Nico',
    lastName: 'Di Pietro',
  },
  status: 'In Progress',
  totalQuestionsNumber: 10,
  question: '¿Cuál es la capital de Argentina?',
  questionNumber: 1,
  answers: {
    me: [],
    opponent: [],
  },
};

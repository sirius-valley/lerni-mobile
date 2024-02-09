import { BubbleResponse } from '../redux/service/types/pill.response';

export interface QuestionnaireChoiceOption {
  id: string;
  text: string;
  selected?: boolean;
}

export const mockedInitialValues: QuestionnaireChoiceOption[] = [
  {
    id: '01',
    text: 'Choice 1',
    selected: false,
  },
  {
    id: '02',
    text: 'Choice 2',
    selected: false,
  },
  {
    id: '03',
    text: 'Choice 3',
    selected: false,
  },
  {
    id: '04',
    text: 'Choice 4',
    selected: false,
  },
];

export const QuestionnaireChoiceImages = [
  {
    id: '01',
    title: 'title 1',
    description: 'description 1',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg',
    selected: false,
  },
  {
    id: '02',
    title: 'title 2',
    description: 'description 2',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg',
    selected: false,
  },
  {
    id: '03',
    title: 'title 3',
    description: 'description 3',
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-bird-170811.jpg&fm=jpg',
    selected: false,
  },
];

export type QuestionnaireBubbles =
  | {
      id: string;
      type: 'text';
      content: string;
    }
  | {
      id: string;
      type: 'free-text';
      content?: string | undefined;
    }
  | {
      id: string;
      type: 'image';
      content: string;
    }
  | {
      id: string;
      type: 'single-choice';
      options: string[];
      value?: string;
    }
  | {
      id: string;
      type: 'multiple-choice';
      options: string[];
      value?: string[];
    }
  | {
      id: string;
      type: 'carousel';
      options: string[];
      value?: string[];
    };

export const questionnaireResponseMockedData: BubbleResponse[] = [
  {
    content: '<p>Bienvenido</p>',
    id: '796c43a6-5cf7-442b-9d78-249ffe087d9f',
    type: 'text',
  },
  {
    content: '<p>Pregunta del profesor</p>',
    id: '796c43a6-5cf7-442b-9d78-249ffe087d9f',
    type: 'text',
  },
  {
    id: 'a45869e8-bc3e-4c3e-b87a-65c6c743cac0',
    options: ['Choice 1', 'Choice 2', 'Choice 3'],
    type: 'single-choice',
    value: '',
  },
];

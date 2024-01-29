import { UserTypes } from '../../../../utils/constants';

export type Status = 'in_progress' | 'completed' | 'not_started' | 'locked';

export interface ProgramCardStructure {
  status: Status;
  label: string;
  progressBar?: boolean;
}

export const programCardsStructure: ProgramCardStructure[] = [
  {
    status: 'in_progress',
    label: 'En curso',
    progressBar: true,
  },
  {
    status: 'completed',
    label: 'Finalizados',
  },
  {
    status: 'not_started',
    label: 'Por empezar',
  },
];

export interface Card {
  id: string;
  title: string;
  image: string;
  progress?: number;
}
export type MockedProgramCards = {
  in_progress: Card[];
  completed: Card[];
  not_started: Card[];
  locked: Card[];
};

export const mockedProgramCardsData: MockedProgramCards = {
  in_progress: [
    {
      id: '001',
      title: 'Project A',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
      progress: 0.5,
    },
    {
      id: '002',
      title: 'Task B',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
      progress: 0.75,
    },
    {
      id: '003',
      title: 'Ongoing ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
      progress: 0.3,
    },
  ],
  completed: [
    {
      id: '101',
      title: 'Completed ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
    {
      id: '102',
      title: 'Finished ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
  ],
  not_started: [
    {
      id: '201',
      title: 'New Task',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
    {
      id: '202',
      title: 'Unstarted ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
    {
      id: '203',
      title: 'Upcoming ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
    {
      id: '204',
      title: 'Pending ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    },
  ],
  locked: [
    {
      id: '015',
      title: 'Project locked',
      image: 'project_a_image.jpg',
    },
    {
      id: '016',
      title: 'Task locked',
      image: 'task_b_image.png',
    },
  ],
};

export const mockedPills = [
  {
    pillNumber: 1,
    progress: 1,
    title: 'Nombre de la pildora',
    duration: 10,
  },
  {
    pillNumber: 2,
    progress: 0.66,
    title: 'Nombre segunda píldora, si fuera muy largo puede estar en 2 lineas',
    duration: 10,
  },
  {
    pillNumber: 3,
    progress: 0,
    title: 'Nombre de la pildora',
    duration: 10,
  },
  {
    pillNumber: 4,
    progress: 0,
    title: 'Nombre de la pildora',
    duration: 10,
    started: false,
  },
  {
    pillNumber: 5,
    progress: 0,
    title: 'Nombre de la pildora',
    duration: 10,
    started: false,
  },
  {
    pillNumber: 6,
    progress: 0,
    title: 'Nombre de la pildora',
    duration: 10,
    started: false,
  },
];

export const mockedLeaderboardRows = [
  {
    imgUrl: 'https://www.comms-express.com/blog/wp-content/uploads/2017/06/funny-emoji.jpg',
    fullName: 'Nombre y Apellido',
    points: 20,
  },
  {
    imgUrl: '',
    fullName: 'Nombre y Apellido',
    points: 19,
    belongsToCurrentUser: true,
  },
  {
    imgUrl: '',
    fullName: 'Nombre y Apellido',
    points: 19,
  },
  {
    imgUrl: '',
    fullName: 'Nombre y Apellido',
    points: 1,
  },
];

interface ProfessorMessageType {
  type: 'image' | 'text';
  user: UserTypes;
  content: string;
}

export const mockedPillDetail = {
  order: 1,
  progress: 0.43,
  description:
    'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollisullamcorper mauris, vitae commodo dui efficitur non. Fusce efficitur pulvinar diamvel dictum.',
  professor: 'Profesor/Autor',
  approved: ['juan', 'valen', 'fabro', 'nico'],
  introductionDone: true,
};
export const mockedProfessorMessage: ProfessorMessageType = {
  type: 'text',
  user: 'professor',
  content:
    'Bienvenidos!! Mi nombre es ......., soy profesor en ....... y en este curso vamos a hablar sobre ........',
};

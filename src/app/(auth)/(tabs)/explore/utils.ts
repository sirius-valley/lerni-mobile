import { SearchResultStatus, SearchResultType } from '../../../../components/search/SearchItem';
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
    imgUrl: 'https://media.discordapp.net/attachments/1163814783913562132/1204910739647631360/Rectangle.png?ex=65d67392&is=65c3fe92&hm=6992592ff585b8601c3b2dc65ee4242fe3865d9e1e7932d3d2c0c70bccd8a78a&=&format=webp&quality=lossless&width=96&height=96',
    fullName: 'Nombre y Apellido',
    points: 20,
    position: 1,
  },
  {
    imgUrl: 'https://media.discordapp.net/attachments/1163814783913562132/1204910738867753041/Rectangle_1.png?ex=65d67392&is=65c3fe92&hm=642b379ac7acf23db0ddca709971fdb5dea48e95b3977eb2ec020a9b398fc5ab&=&format=webp&quality=lossless&width=96&height=96',
    fullName: 'Nombre y Apellido',
    points: 19,
    position: 6,
  },
  {
    imgUrl: 'https://media.discordapp.net/attachments/1163814783913562132/1204910739148775465/Rectangle_2.png?ex=65d67392&is=65c3fe92&hm=7bd244842b94dd63dab159bd8ceea9ac3acae8f39ac1b8b95c3766c7f78ae320&=&format=webp&quality=lossless&width=96&height=96',
    fullName: 'Nombre y Apellido',
    points: 18,
    belongsToCurrentUser: true,
    position: 7,
  },
  {
    imgUrl: 'https://media.discordapp.net/attachments/1163814783913562132/1204910739425337394/Rectangle_3.png?ex=65d67392&is=65c3fe92&hm=51e57ec446be1e6bf5d2d01b2949b13362e6b6815eb9f996df11bb9e04899cc1&=&format=webp&quality=lossless&width=96&height=96',
    fullName: 'Nombre y Apellido',
    points: 16,
    position: 8
  },
];

// SEARCH SCREEN
export const quickFilters = [
  {
    id: '0',
    label: 'Todo',
    type: '',
  },
  {
    id: '1',
    label: 'Píldoras',
    type: 'pill' as SearchResultType,
  },
  {
    id: '2',
    label: 'Programas',
    type: 'program' as SearchResultType,
  },
  {
    id: '3',
    label: 'Profesionales',
    type: 'professionals' as SearchResultType,
  },
];

export const mockedSearchResults = [
  {
    id: '0',
    type: 'program' as SearchResultType,
    title: 'Titulo',
    description:
      'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/240px-React_Logo_SVG.svg.png',
    status: 'not_started' as SearchResultStatus,
  },
  {
    id: '1',
    type: 'pill' as SearchResultType,
    title: 'Pill title',
    description:
      'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.',
    progress: 0.32,
  },
  {
    id: '2',
    type: 'program' as SearchResultType,
    title: 'Program',
    description: 'Descripción lorem ipsum.',
    imgUrl:
      'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
    status: 'completed' as SearchResultStatus,
  },
  {
    id: '3',
    type: 'program' as SearchResultType,
    title: 'Program 2',
    description:
      'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.',
    imgUrl:
      'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
    status: 'in_progress' as SearchResultStatus,
    progress: 0.6,
  },
  {
    id: '4',
    type: 'program' as SearchResultType,
    title: 'Another program',
    description:
      'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, commodo.',
    imgUrl:
      'https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png',
    status: 'locked' as SearchResultStatus,
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

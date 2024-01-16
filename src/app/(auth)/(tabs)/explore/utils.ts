export type Status = 'in_progress' | 'completed' | 'not_started';

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
};

export const mockedProgramCardsData: MockedProgramCards = {
  in_progress: [
    {
      id: '001',
      title: 'Project A',
      image: 'project_a_image.jpg',
      progress: 0.5,
    },
    {
      id: '002',
      title: 'Task B',
      image: 'task_b_image.png',
      progress: 0.75,
    },
    {
      id: '003',
      title: 'Ongoing ',
      image: 'ongoing_feature_image.jpg',
      progress: 0.3,
    },
  ],
  completed: [
    {
      id: '101',
      title: 'Completed ',
      image: 'completed_project_image.png',
    },
    {
      id: '102',
      title: 'Finished ',
      image: 'finished_task_image.jpg',
    },
  ],
  not_started: [
    {
      id: '201',
      title: 'New Task',
      image: 'new_task_image.jpg',
    },
    {
      id: '202',
      title: 'Unstarted ',
      image: 'unstarted_project_image.png',
    },
    {
      id: '203',
      title: 'Upcoming ',
      image: 'upcoming_feature_image.jpg',
    },
    {
      id: '204',
      title: 'Pending ',
      image: 'pending_assignment_image.png',
    },
  ],
};

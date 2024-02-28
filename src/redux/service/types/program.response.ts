export type ProgramResponseType = {
  id: string;
  programName: string;
  teacher: {
    id: string;
    name: string;
    lastname: string;
    profession: string;
    image: string;
  };
  progress: number;
  pillCount: number;
  icon: string;
  estimatedHours: number;
  points: number;
  programDescription: string;
  programObjectives: string[];
  pills: [
    {
      id: string;
      pillName: string;
      pillProgress: number;
      completionTimeMinutes: number;
      isLocked: boolean;
    },
  ];
  questionnaire: {
    id: string;
    questionnaireName: string;
    completionTimeMinutes: number;
    questionnaireProgress: number;
    isLocked: boolean;
  };
};

export type ProgramIdType = string | string[] | undefined;

export interface Program {
  id: string;
  name: string;
  icon: string;
  progress: number;
}

export interface ProgramsData {
  programsCompleted: Program[];
  programsInProgress: Program[];
  programsNotStarted: Program[];
}

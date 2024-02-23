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
    },
  ];
};

export type ProgramIdType = string | string[] | undefined;

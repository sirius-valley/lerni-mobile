export type BubbleResponse = {
  id: string;
  type: 'text' | 'single-choice' | 'multiple-choice' | 'carousel';
  content?: string;
  options?: string[];
  imgOptions?: ImagesOptions[];
  correctAnswer?: string[];
  points?: number;
  value?: string | string[];
};

export type PillResponse = {
  pill: {
    id: string;
    name: string;
    description: string;
    teacherComment: string;
    version: number;
    completionTimeMinutes: number;
    completed: boolean;
    progress: number;
    bubbles: BubbleResponse[];
  };
  teacher?: {
    id: string;
    name: string;
    lastname: string;
    profession: string;
    image: string;
  };
};

export type PillAnswerBody = {
  pillId: string;
  questionId: string;
  answer: string;
};

export type ImagesOptions = {
  title: string;
  description: string;
  image: string;
  id?: string;
  selected?: boolean;
};

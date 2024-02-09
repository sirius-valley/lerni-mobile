export type BubbleResponse = {
  id: string;
  type: 'text' | 'single-choice';
  content?: string;
  options?: string[];
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

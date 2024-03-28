import { User } from '../../../PlayerStatus';
import { SimpleStudent } from '../../../../../types';

export enum TriviaStatus {
  INCOMPLETE = 'incomplete',
  CHALLENGED = 'challenged',
  PENDING = 'pending',
  WAITING = 'waiting',
}
export interface TriviaCardProps {
  programName: string;
  user: SimpleStudent;
  opponent?: SimpleStudent;
  timeLeft?: string;
  score?: {
    me: number;
    opponent: number;
  };
  status: TriviaStatus;
}

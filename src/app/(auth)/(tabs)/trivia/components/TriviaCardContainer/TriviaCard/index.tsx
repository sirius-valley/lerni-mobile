import ChallengedCard from './Challenged';
import IncompleteCard from './Incomplete';
import PendingCard from './Pending';
import WaitingCard from './Waiting';
import { TriviaCardProps, TriviaStatus } from './types';

export const TriviaCard = ({
  programName,
  user,
  opponent,
  timeLeft,
  status,
  score,
}: TriviaCardProps) => {
  if (status === TriviaStatus.CHALLENGED) {
    return (
      <ChallengedCard programName={programName} user={user} opponent={opponent} status={status} />
    );
  }

  if (status === TriviaStatus.INCOMPLETE) {
    return (
      <IncompleteCard programName={programName} user={user} opponent={opponent} status={status} />
    );
  }

  if (status === TriviaStatus.WAITING) {
    return (
      <WaitingCard programName={programName} user={user} opponent={opponent} status={status} />
    );
  }

  if (status === TriviaStatus.PENDING) {
    return (
      <PendingCard programName={programName} user={user} opponent={opponent} status={status} />
    );
  }
};

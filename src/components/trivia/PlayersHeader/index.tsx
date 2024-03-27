import BoltIcon from '../../../../assets/icons/BoltIcon';
import { VSIcon } from '../../../../assets/icons/VSIcon';
import { StyledBox, StyledRow } from '../../styled/styles';
import PlayerStatus from '../PlayerStatus';

interface PlayersHeaderProps {
  answerHistory: {
    me: {
      id: string;
      isCorrect: boolean;
    }[];
    opponent: {
      id: string;
      isCorrect: boolean;
    }[];
  };
  opponent: {
    imgUrl?: string;
    firstName?: string;
    lastName?: string;
  };
  currentUser: {
    imgUrl?: string;
    firstName?: string;
    lastName?: string;
  };
  totalQuestions: number;
}

const PlayersHeader = ({
  answerHistory,
  opponent,
  currentUser,
  totalQuestions,
}: PlayersHeaderProps) => {
  return (
    <StyledRow css={{ position: 'relative', justifyContent: 'center', width: '100%' }}>
      <PlayerStatus
        points={answerHistory.me}
        firstName={currentUser?.firstName}
        lastName={currentUser?.lastName}
        imgUrl={currentUser?.imgUrl}
        side={'left'}
        totalQuestionsNumber={totalQuestions}
      />
      <StyledBox
        style={{
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          top: 16,
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <StyledBox>
          <BoltIcon size={47} />
          <StyledBox
            css={{
              width: 24,
              height: 24,
              zIndex: 3,
              left: '3.5%',
              bottom: '50%',
            }}
          >
            <VSIcon size={24} />
          </StyledBox>
        </StyledBox>
      </StyledBox>
      <PlayerStatus
        points={answerHistory.opponent}
        firstName={opponent?.firstName}
        lastName={opponent?.lastName}
        imgUrl={opponent?.imgUrl}
        side={'right'}
        totalQuestionsNumber={totalQuestions}
      />
    </StyledRow>
  );
};
export default PlayersHeader;

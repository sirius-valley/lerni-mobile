import { CongratulationsIcon } from '../../../assets/icons/CongratulationsIcon';
import { RaceFlagIcon } from '../../../assets/icons/RaceFlagIcon';
import { TiredIcon } from '../../../assets/icons/TiredIcon';
import { TriviaStatusTypes } from '../../utils/constants';
import Button from '../styled/Button';
import { StyledBox, StyledColumn, StyledText } from '../styled/styles';
import { TriviaResultBox } from './result-box';

export interface TriviaResultProps {
  handleOnPress?: () => void;
  handleOnPlay?: () => void;
  triviaStatus: TriviaStatusTypes;
  program?: string;
  pointsEarned?: number;
}

export const TriviaResult = ({
  handleOnPress,
  handleOnPlay,
  triviaStatus,
  program,
  pointsEarned,
}: TriviaResultProps) => {
  return (
    <StyledColumn
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        paddingTop: 32,
        padding: 24,
      }}
    >
      <TriviaResultBox
        triviaStatus={triviaStatus}
        program={program}
        pointsEarned={pointsEarned}
        handleOnPress={handleOnPress}
        handleOnPlay={handleOnPlay}
      />
    </StyledColumn>
  );
};

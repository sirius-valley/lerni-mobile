import { CongratulationsIcon } from '../../../assets/icons/CongratulationsIcon';
import { RaceFlagIcon } from '../../../assets/icons/RaceFlagIcon';
import { TiredIcon } from '../../../assets/icons/TiredIcon';
import { TriviaStatusTypes } from '../../utils/constants';
import Button from '../styled/Button';
import { StyledBox, StyledColumn, StyledText } from '../styled/styles';
import { TriviaResultBox } from './result-text';

export interface TriviaResultProps {
  buttonText?: string;
  handleButtonPress?: () => void;
  triviaStatus: TriviaStatusTypes;
  program: string;
  pointsEarned: number;
}

export const TriviaResult = ({
  buttonText,
  handleButtonPress,
  triviaStatus,
  program,
  pointsEarned,
}: TriviaResultProps) => {
  return (
    <StyledColumn
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TriviaResultBox triviaStatus={triviaStatus} program={program} pointsEarned={pointsEarned} />
      <StyledColumn style={{ width: '90%' }}>
        <Button onPress={handleButtonPress ? handleButtonPress : () => {}}>{buttonText}</Button>
      </StyledColumn>
    </StyledColumn>
  );
};

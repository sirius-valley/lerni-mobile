import { Pressable } from 'react-native';
import { TriviaResultProps } from '..';
import { CongratulationsIcon } from '../../../../assets/icons/CongratulationsIcon';
import { RaceFlagIcon } from '../../../../assets/icons/RaceFlagIcon';
import { TiredIcon } from '../../../../assets/icons/TiredIcon';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import { TriviaResultText } from './trivia-result-text';
import Button from '../../styled/Button';
import { TriviaResultButtons } from './result-bottom';

export const TriviaResultBox = ({
  triviaStatus,
  program,
  pointsEarned,
  handleOnPress,
  handleOnPlay,
}: TriviaResultProps) => {
  return (
    <>
      {(() => {
        switch (triviaStatus) {
          case 'not_started':
            return (
              <StyledBox
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 40,
                }}
              >
                <RaceFlagIcon size={150} />
                <TriviaResultText
                  triviaStatus={triviaStatus}
                  program={program}
                  pointsEarned={pointsEarned}
                />
                <TriviaResultButtons
                  handleOnPlay={handleOnPlay}
                  handleOnPress={handleOnPress}
                  triviaStatus={triviaStatus}
                />
              </StyledBox>
            );
          case 'approved':
            return (
              <StyledBox
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 40,
                }}
              >
                <CongratulationsIcon size={150} />
                <TriviaResultText
                  triviaStatus={triviaStatus}
                  program={program}
                  pointsEarned={pointsEarned}
                />
                <TriviaResultButtons
                  handleOnPlay={handleOnPlay}
                  handleOnPress={handleOnPress}
                  triviaStatus={triviaStatus}
                />
              </StyledBox>
            );
          case 'disapproved':
            return (
              <StyledBox
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 40,
                }}
              >
                <TiredIcon size={150} />
                <TriviaResultText
                  triviaStatus={triviaStatus}
                  program={program}
                  pointsEarned={pointsEarned}
                />
                <TriviaResultButtons
                  handleOnPlay={handleOnPlay}
                  handleOnPress={handleOnPress}
                  triviaStatus={triviaStatus}
                />
              </StyledBox>
            );
        }
      })()}
    </>
  );
};

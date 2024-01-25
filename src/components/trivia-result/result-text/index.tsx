import { TriviaResultProps } from '..';
import { CongratulationsIcon } from '../../../../assets/icons/CongratulationsIcon';
import { RaceFlagIcon } from '../../../../assets/icons/RaceFlagIcon';
import { TiredIcon } from '../../../../assets/icons/TiredIcon';
import { useGetTriviaResultText } from '../../../hook/useGetTriviaResultText';
import { TriviaStatusTypes } from '../../../utils/constants';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';

export const TriviaResultBox = ({ triviaStatus, program, pointsEarned }: TriviaResultProps) => {
  const { triviaResultText1, triviaResultText2, triviaResultText3 } = useGetTriviaResultText(
    triviaStatus,
    program,
    pointsEarned,
  );

  return (
    <StyledBox
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        paddingTop: 32,
        padding: 24,
      }}
    >
      {(() => {
        switch (triviaStatus) {
          case 'not_started':
            return <RaceFlagIcon size={150} />;
          case 'approved':
            return <CongratulationsIcon size={150} />;
          case 'disapproved':
            return <TiredIcon size={150} />;
        }
      })()}
      <StyledColumn style={{ gap: 16, alignItems: 'center' }}>
        <StyledText variant="h1" style={{ color: 'white' }}>
          {triviaResultText1}
        </StyledText>
        {triviaResultText2}
        {triviaResultText3}
      </StyledColumn>
    </StyledBox>
  );
};

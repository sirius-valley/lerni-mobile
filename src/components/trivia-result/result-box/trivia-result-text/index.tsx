import { useTheme } from 'styled-components/native';
import { TriviaResultProps } from '../..';
import { useGetTriviaResultText } from '../../../../hook/useGetTriviaResultText';
import { StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import RhombusIcon from '../../../../../assets/icons/RhombusIcon';

export const TriviaResultText = ({
  triviaStatus,
  program = '',
  pointsEarned = 0,
}: TriviaResultProps) => {
  const theme = useTheme();
  const { ResultText1, ResultText2, ResultText3, ResultText4, ResultText5 } =
    useGetTriviaResultText(triviaStatus, program, pointsEarned);
  return (
    <StyledColumn style={{ gap: 16, alignItems: 'center', width: '90%' }}>
      <StyledText variant="h1" style={{ color: theme.gray6 }}>
        {ResultText1}
      </StyledText>
      {(() => {
        switch (triviaStatus) {
          case 'not_started':
            return (
              <StyledColumn style={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                  {ResultText2}
                </StyledText>
                <StyledRow
                  style={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                  <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                    {ResultText3}
                  </StyledText>
                  <StyledText
                    variant="body2Bold"
                    style={{ color: theme.gray6, textAlign: 'center' }}
                  >
                    {ResultText4}
                  </StyledText>
                  <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                    {ResultText5}
                  </StyledText>
                </StyledRow>
              </StyledColumn>
            );

          case 'approved':
            return (
              <StyledColumn style={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                  {ResultText2}
                </StyledText>
                <StyledRow style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                    {ResultText3}
                  </StyledText>
                  <RhombusIcon size={14} />
                  <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                    {ResultText4}
                  </StyledText>
                </StyledRow>
              </StyledColumn>
            );
          case 'disapproved':
            return (
              <StyledColumn style={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}>
                <StyledText variant="body2" style={{ color: theme.gray6, textAlign: 'center' }}>
                  {ResultText2}
                  {ResultText3}
                </StyledText>
              </StyledColumn>
            );
        }
      })()}
    </StyledColumn>
  );
};

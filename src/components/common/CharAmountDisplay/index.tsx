import React from 'react';
import { StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';

interface CharAmountDisplayInterface {
  text: string;
  topLength: number;
}

const CharAmountDisplay = ({
  text,
  topLength,
}: CharAmountDisplayInterface) => {

  const textLength = text.length;
  const theme = useTheme();
  const charLengthWarning = (topLength * 0.8) < textLength;

  return (
    <StyledRow css={{ alignItems: 'center' }}>
      <StyledText css={{ color: charLengthWarning ? theme.warning : theme.primary950 }}>
        {textLength}
      </StyledText>
      <StyledText>
        /{topLength}
      </StyledText>
    </StyledRow>
  )
}

export default CharAmountDisplay;
import React from 'react';
import { StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';

interface CharAmountDisplayInterface {
  text: string;
  topLength: number;
}

const CharAmountDisplay = ({ text, topLength }: CharAmountDisplayInterface) => {
  const textLength = text.length;
  const theme = useTheme();
  const charLengthWarning = topLength * 0.8 < textLength;

  const getColor = () => {
    if (charLengthWarning) return theme.warning;
    else if (textLength === topLength) return theme.red500;
    else return theme.primary950;
  };

  return (
    <StyledRow css={{ alignItems: 'center' }}>
      <StyledText css={{ color: getColor(), fontSize: '10px' }}>{textLength}</StyledText>
      <StyledText css={{ fontSize: '10px' }}>/{topLength}</StyledText>
    </StyledRow>
  );
};

export default CharAmountDisplay;

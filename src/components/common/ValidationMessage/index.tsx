import React from 'react';
import { StyledRow, StyledText } from '../../styled/styles';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import { useTheme } from 'styled-components';

interface ValidationMessageInterface {
  isValid: boolean;
  message: string;
}

const ValidationMessage = ({
  isValid,
  message
}: ValidationMessageInterface) => {
  const theme = useTheme();
  return (
    <StyledRow css={{ gap: '8px' }}>
      {isValid ? <CheckIcon /> : <MultiplyIcon />}
      <StyledText css={{ color: theme.white }}>{message}</StyledText>
    </StyledRow>
  )
}

export default ValidationMessage;
import React from 'react';
import { View, Text } from 'react-native';
import MultiplyIcon from '../../../assets/icons/MultiplyIcon';
import CheckIcon from '../../../assets/icons/CheckIcon';
import { StyledColumn, StyledRow, StyledText } from '../common/styles';

interface PasswordValidationDisplayInterface {
  password: string;
}

const PasswordValidationDisplay = ({
  password
}: PasswordValidationDisplayInterface) => {

  const validateCharLength = () => password.length >= 8;
  const containsNumbers = () => /\d/.test(password);
  const hasUppercase = () => /\p{Lu}/u.test(password);

  return (
    <StyledColumn css={Styles.gapMd}>
      <StyledRow css={Styles.gapMd}>
        {
          validateCharLength() ? <CheckIcon /> : <MultiplyIcon />
        }
        <StyledText>Más de 8 caracteres</StyledText>
      </StyledRow>
      <StyledRow css={Styles.gapMd}>
        {
          containsNumbers() ? <CheckIcon /> : <MultiplyIcon />
        }
        <StyledText>Al menos 1 número</StyledText>
      </StyledRow>
      <StyledRow css={Styles.gapMd}>
        {
          hasUppercase() ? <CheckIcon /> : <MultiplyIcon />
        }
        <StyledText>Al menos 1 mayúscula</StyledText>
      </StyledRow>
    </StyledColumn>
  )
}

export default PasswordValidationDisplay;

const Styles = {
  gapMd: {
    gap: '8px',
  }
}
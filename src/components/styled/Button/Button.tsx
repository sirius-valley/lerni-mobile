import React, { useMemo } from 'react';
import { ButtonLabelSize, ButtonState, StyledButton, StyledTextButton } from './styles';
import { ButtonVariant } from '../../../utils/constants';
import { useTheme } from 'styled-components/native';
import Spinner from '../../Spinner/Spinner';

export interface ButtonProps {
  onPress: () => void;
  children: string;
  Icon?: (arg: any) => JSX.Element;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  css?: { [key in string]: string | number | boolean };
}
const Button = ({
  onPress,
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  Icon,
  css,
}: ButtonProps) => {
  const isDisabled = useMemo(
    () => (disabled ? ButtonState.DISABLED : ButtonState.DEFAULT),
    [disabled],
  );

  const renderLabel = () => {
    if (loading) return <Spinner variant={variant} size={'small'} />;
    return (
      <StyledTextButton type={variant} state={isDisabled}>
        {children}
      </StyledTextButton>
    );
  };

  return (
    <StyledButton
      type={variant}
      state={isDisabled}
      disabled={disabled}
      onPress={() => (disabled || loading ? undefined : onPress())}
      css={{
        css,
      }}
    >
      {Icon &&
        !loading &&
        Icon({
          color: '#eee',
          size: 18,
        })}
      {renderLabel()}
    </StyledButton>
  );
};

export default Button;

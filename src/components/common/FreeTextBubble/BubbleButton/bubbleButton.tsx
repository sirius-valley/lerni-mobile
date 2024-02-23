import React, { ReactNode, useMemo, useState } from 'react';
import { ButtonVariant } from '../../../../utils/constants';
import { useTheme } from 'styled-components';
import Spinner from '../../Spinner';
import { CSSProperties, getStyleColorByVariant } from '../../../../utils/utils';
import { IconInterface } from '../../../../../assets/icons/types';
import { ThemeColors } from '../../../../utils/theme';
import { ButtonState, StyledButton, StyledTextButton } from '../../../styled/Button/styles';

export interface BubbleButtonProps {
  onPress: () => void;
  children?: ReactNode;
  icon?: React.FC<IconInterface>;
  iconColor?: keyof ThemeColors;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  css?: CSSProperties;
}
const BubbleButton = ({
  onPress,
  children = '',
  variant = 'primary',
  disabled = false,
  loading = false,
  icon: Icon,
  css,
}: BubbleButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const theme = useTheme();
  const getContrastColor = () => {
    switch (variant) {
      case 'primary':
        return getStyleColorByVariant('dark');
      case 'ghost':
        return getStyleColorByVariant('primary');
      default:
        return theme.white;
    }
  };

  const isDisabled = useMemo(
    () => (disabled ? ButtonState.DISABLED : ButtonState.DEFAULT),
    [disabled],
  );

  return (
    <StyledButton
      type={variant}
      state={isDisabled}
      disabled={disabled}
      pressed={isPressed}
      onPress={() => {
        console.log('press: ', onPress, disabled, loading);
        return disabled || loading ? undefined : onPress();
      }}
      onPressIn={() => !disabled && !loading && setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      css={css}
    >
      {loading ? (
        <Spinner color={getContrastColor()} size={'small'} />
      ) : (
        <>
          {Icon && <Icon color={'white'} size={18} />}
          {children && (
            <StyledTextButton type={variant} state={isDisabled} pressed={false}>
              {children}
            </StyledTextButton>
          )}
        </>
      )}
    </StyledButton>
  );
};

export default BubbleButton;

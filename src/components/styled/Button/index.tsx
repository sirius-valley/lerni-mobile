import React, { useMemo, useState } from 'react';
import { ButtonState, StyledButton, StyledTextButton } from './styles';
import { ButtonVariant } from '../../../utils/constants';
import { useTheme, DefaultTheme } from 'styled-components';
import Spinner from '../../common/Spinner';
import { CSSProperties, getStyleColorByVariant } from '../../../utils/utils';
import { IconInterface } from '../../../../assets/icons/types';
import { ThemeColors } from '../../../utils/theme';

export interface ButtonProps {
  onPress: () => void;
  children?: string;
  icon?: React.FC<IconInterface>;
  iconColor?: keyof ThemeColors;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  css?: CSSProperties;
}
const Button = ({
  onPress,
  children = '',
  variant = 'primary',
  disabled = false,
  loading = false,
  icon: Icon,
  iconColor,
  css,
}: ButtonProps) => {
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
      onPress={() => (disabled || loading ? undefined : onPress())}
      onPressIn={() => !disabled && !loading && setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      css={css}
    >
      {loading
        ? <Spinner color={getContrastColor()} size={'small'} />
        : (
          <>
            {Icon && <Icon color={iconColor ? theme[iconColor] : getContrastColor()} size={18} />}
            {children && (
              <StyledTextButton
                type={variant}
                state={isDisabled}
                pressed={false}
              >
                {children}
              </StyledTextButton>
            )}
          </>
        )}
    </StyledButton>
  );
};

export default Button;

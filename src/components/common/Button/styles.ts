import { Pressable, PressableProps, Text } from 'react-native';
import styled from 'styled-components';
import { jsToCss } from '../../../utils/utils';
import { DefaultTheme } from 'styled-components/native';
import { ButtonVariant, ComponentVariantType } from '../../../utils/constants';


type styleProps = {
  [key: string]: string | number | { [key in string]: string | number };
};

type StyleByOptionsProps = {
  [key in ButtonVariant]: {
    [state in ButtonState]: styleProps;
  };
};

export enum ButtonState {
  DEFAULT = 'default',
  DISABLED = 'disabled',
}

const getButtonStyles = (theme: DefaultTheme): StyleByOptionsProps => {
  return {
    'primary': {
      [ButtonState.DEFAULT]: {
        backgroundColor: theme.primary500,
        color: theme.blue500,
        border: 'none',
        hover: {
          backgroundColor: theme.primary600,
          color: theme.blue500,
        },
      },
      [ButtonState.DISABLED]: {
        border: 'none',
        backgroundColor: theme.gray300,
        color: theme.gray500,
      },
    },
    'dark': {
      [ButtonState.DEFAULT]: {
        backgroundColor: theme.primary800,
        color: theme.white,
        border: 'none',
        hover: {
          backgroundColor: theme.primary900,
          color: theme.white,
        },
      },

      [ButtonState.DISABLED]: {
        border: 'none',
        backgroundColor: theme.gray300,
        color: theme.gray500,
      },
    },
    'ghost': {
      [ButtonState.DEFAULT]: {
        backgroundColor: 'transparent',
        color: theme.primary500,
        border: 'none',
        hover: {
          backgroundColor: theme.primary200,
          color: theme.primary400,
        },
      },
      [ButtonState.DISABLED]: {
        border: 'none',
        backgroundColor: theme.gray300,
        color: theme.gray500,
      },
    },
    'red': {
      [ButtonState.DEFAULT]: {
        backgroundColor: theme.red500,
        color: theme.white,
        border: 'none',
        hover: {
          backgroundColor: theme.red600,
        },
      },
      [ButtonState.DISABLED]: {
        border: 'none',
        backgroundColor: theme.gray300,
        color: theme.gray500,
      },
    },
  };
};

interface ButtonProps extends PressableProps {
  type: ButtonVariant;
  state: ButtonState;
  css?: { [x: string]: any };
  pressed: boolean;
}

export const StyledButton = styled(Pressable).attrs<ButtonProps>((props) => ({
  type: props.type ?? 'primary',
  state: props.state ?? ButtonState.DEFAULT,
  pressed: props.pressed,
}))`
  min-width: 96px;
  height: 42px;
  border-radius: 6px;
  padding: 8px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  font-weight: 700;
  ${(props) => {
    const { hover, ...restStyles } = getButtonStyles(props.theme)[props.type][props.state];
    const styleHover: { [key: string]: string | number } = typeof hover === 'object' ? hover : {};
    return `
      ${jsToCss({ ...restStyles, ...(props.pressed ? styleHover : {}) })}
    `;
  }}
  ${(props) => props.css && jsToCss(props.css)}
`;

export const StyledTextButton = styled(Text).attrs<ButtonProps>((props) => ({
  type: props.type ?? 'primary',
  state: props.state ?? 'default',
}))`
  ${(props) => {
    if (props.type) {
      const styles = getButtonStyles(props.theme)[props.type][props.state];
      return `
        color: ${styles.color};
        font-size: 16px;
        font-weight: 700;
      `;
    }
    return '';
  }};
`;

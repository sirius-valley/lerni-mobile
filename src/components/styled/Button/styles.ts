import { Pressable, Text } from 'react-native';
import styled from 'styled-components';
import { jsToCss } from '../../../utils/utils';
import { DefaultTheme } from 'styled-components/native';
import { ButtonVariant, ComponentVariantType } from '../../../utils/constants';

export interface StyledProps {
  css?: { [x: string]: any };
}

type styleProps = {
  [key: string]: string | number | { [key in string]: string | number };
};

type StyleByOptionsProps = {
  [key in ButtonVariant]: {
    [state in ButtonState]: styleProps;
  };
};

export enum ButtonSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ButtonState {
  DEFAULT = 'default',
  DISABLED = 'disabled',
}

export enum ButtonLabelSize {
  BODY1 = 'body1',
  BODY2 = 'body2',
  BODY3 = 'body3',
}

const getButtonStyles = (theme: DefaultTheme): StyleByOptionsProps => {
  return {
    ['primary']: {
      [ButtonState.DEFAULT]: {
        backgroundColor: theme.primary500,
        color: theme.white,
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
    ['dark']: {
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
    ['ghost']: {
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
    ['red']: {
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

interface ButtonProps {
  type: ButtonVariant;
  state: ButtonState;
  css?: { [x: string]: any };
}

export const StyledButton = styled(Pressable).attrs<ButtonProps>((props) => ({
  type: props.type ?? ComponentVariantType.PRIMARY,
  state: props.state ?? ButtonState.DEFAULT,
}))`
  width: 96px;
  height: 42px;
  border-radius: 6px;
  padding: 8px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  font-weight: 700;
  ${(props) => {
    if (props.type) {
      const { hover, ...restStyles } = getButtonStyles(props.theme)[props.type][props.state];
      const styleHover: { [key: string]: string | number } = typeof hover === 'object' ? hover : {};
      return `
      ${jsToCss(restStyles)}
      `;
    }
  }}
  ${(props) => props.css && jsToCss(props.css)}
`;

interface StyledTextButton extends ButtonProps {
  label?: string;
}

export const StyledTextButton = styled(Text).attrs<StyledTextButton>((props) => ({
  type: props.type ?? ComponentVariantType.PRIMARY,
  state: props.state ?? ButtonState.DEFAULT,
}))`
  ${(props) => {
    if (props.type) {
      const styles = getButtonStyles(props.theme)[props.type][props.state];
      return `color: ${styles.color}`;
    }
    return '';
  }};
`;

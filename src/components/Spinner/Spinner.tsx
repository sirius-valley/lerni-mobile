import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ButtonVariant } from '../../utils/constants';
import { getStyleColorByVariant } from '../../utils/utils';
import { useTheme } from 'styled-components/native';

type SpinnerSizeType = 'small' | 'large';

interface SpinnerInterface {
  size?: SpinnerSizeType;
  variant?: ButtonVariant;
}

const Spinner = ({ size = 'small', variant }: SpinnerInterface) => {
  const theme = useTheme();
  const getSpinnerColor = () => {
    switch (variant) {
      case 'primary':
        return getStyleColorByVariant('dark');
      case 'ghost':
        return getStyleColorByVariant('primary');
      default:
        return theme.white;
    }
  };
  return <ActivityIndicator size={size} color={getSpinnerColor()} />;
};

export default Spinner;

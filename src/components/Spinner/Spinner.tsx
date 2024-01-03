import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { ButtonVariant } from '../../utils/constants';

type SpinnerSizeType = 'small' | 'large';

interface SpinnerInterface {
  size?: SpinnerSizeType;
  variant?: ButtonVariant;
}

const Spinner = ({ size = 'small', variant }: SpinnerInterface) => {
  return <ActivityIndicator size={size} color={variant} />;
};

export default Spinner;

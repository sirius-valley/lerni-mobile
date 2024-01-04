import React from 'react';
import { ActivityIndicator } from 'react-native';

type SpinnerSizeType = 'small' | 'large';

interface SpinnerInterface {
  size?: SpinnerSizeType;
  color?: string;
}

const Spinner = ({ size = 'small', color = '#eee' }: SpinnerInterface) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Spinner;

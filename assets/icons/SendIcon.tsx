import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from './types';

const SendIcon = ({ color = '#000C0F', size = 14 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 14" fill="none">
      <Path
        d="M0.00857142 14L18 7L0.00857142 0L0 5.44444L12.8571 7L0 8.55556L0.00857142 14Z"
        fill={color}
      />
    </Svg>
  );
};

export default SendIcon;

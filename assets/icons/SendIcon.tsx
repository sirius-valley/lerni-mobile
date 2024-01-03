import React from 'react';
import Svg, { Path } from 'react-native-svg';
interface SendIconInterface {
  color?: string;
  size?: number;
}

const SendIcon = ({ color = '#000C0F', size = 14 }: SendIconInterface) => {
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

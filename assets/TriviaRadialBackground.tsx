import React from 'react';
import { Dimensions } from 'react-native';
import { Circle } from 'react-native-svg';
import { Defs, Stop, Svg, RadialGradient as SVGRadialGradient, Rect } from 'react-native-svg';

export const TriviaRadialBackground = () => {
  const { width, height } = Dimensions.get('screen');

  return (
    <Svg
      height={height}
      width={width}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Defs>
        <SVGRadialGradient
          id="grad"
          cx="46%"
          cy="28%"
          r="15%"
          rx="30%"
          fx="46%"
          fy="28%"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#03566f" offset="0%" />
          <Stop stopColor="#013d50" offset="100%" />
        </SVGRadialGradient>
      </Defs>
      <Circle cx="50%" cy="50%" r="50%" fill="url(#grad)" />
    </Svg>
  );
};

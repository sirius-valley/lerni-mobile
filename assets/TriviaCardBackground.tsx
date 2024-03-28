import React from 'react';
import { Dimensions } from 'react-native';
import { Circle } from 'react-native-svg';
import { Defs, Stop, Svg, RadialGradient as SVGRadialGradient, Rect } from 'react-native-svg';

export const TriviaRadialBackground = () => {
  const screenWidth = Dimensions.get('screen').width;
  const baseWidth = 342;
  const baseHeight = 389;
  const scaleFactor = screenWidth / 400;
  const adjustedWidth = baseWidth * scaleFactor;
  const adjustedHeight = baseHeight * scaleFactor;

  return (
    <Svg
      height={adjustedHeight}
      width={adjustedWidth}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Defs>
        <SVGRadialGradient id="grad" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#013d50" offset="30%" />
          <Stop stopColor="#01536C" offset="0%" />
          <Stop stopColor="#012A36" offset="90%" />
        </SVGRadialGradient>
      </Defs>
      <Rect rx={8} ry={8} width={adjustedWidth} height="100%" fill="url(#grad)" />
    </Svg>
  );
};

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from "./types";

const ClockIcon = ({ color = '#33C7D3', size = 15 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 14" fill="none">
      <Path
        d="M7.88358 14C11.7202 14 14.887 10.8317 14.887 7C14.887 3.16828 11.7134 0 7.87681 0C4.04694 0 0.886963 3.16828 0.886963 7C0.886963 10.8317 4.05371 14 7.88358 14ZM4.47324 7.853C4.16874 7.853 3.93191 7.61605 3.93191 7.31141C3.93191 7.00677 4.16874 6.76983 4.47324 6.76983H7.34226V2.88395C7.34226 2.5793 7.57908 2.34236 7.87681 2.34236C8.18807 2.34236 8.4249 2.5793 8.4249 2.88395V7.31141C8.4249 7.61605 8.18807 7.853 7.87681 7.853H4.47324Z"
        fill={color}
      />
    </Svg>
  );
};

export default ClockIcon;
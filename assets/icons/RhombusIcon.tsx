import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from "./types";

const RhombusIcon = ({ color = '#33C7D3', size = 14 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 14" fill="none">
      <Path d="M6.38696 14C6.82973 14 7.05803 13.71 7.46621 13.1773L11.5618 7.84971C11.7832 7.55973 11.887 7.28998 11.887 7C11.887 6.71002 11.7832 6.44027 11.5618 6.15029L7.46621 0.822736C7.05803 0.289981 6.82973 0 6.38696 0C5.9442 0 5.71589 0.289981 5.30772 0.822736L1.21212 6.15029C0.990736 6.44027 0.886963 6.71002 0.886963 7C0.886963 7.28998 0.990736 7.55973 1.21212 7.84971L5.30772 13.1773C5.71589 13.71 5.9442 14 6.38696 14Z"
        fill={color}
      />
    </Svg>
  );
};

export default RhombusIcon;

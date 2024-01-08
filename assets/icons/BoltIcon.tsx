import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import {IconInterface} from "./types";

const BoltIcon = ({ color = '#307F90', size = 14 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 13.113C6 12.9025 6.08774 12.7182 6.24567 12.5252L14.4319 2.38232C15.0636 1.60143 16.0551 2.11032 15.6954 3.0667L13.0193 10.2615H18.1083C18.4943 10.2615 18.7751 10.5247 18.7751 10.8932C18.7751 11.095 18.6961 11.2793 18.5382 11.4811L10.3432 21.6239C9.71145 22.396 8.71997 21.8871 9.07971 20.9308L11.7558 13.7448H6.66683C6.28077 13.7448 6 13.4728 6 13.113Z"
        fill={color}
      />
    </Svg>
  );
};

export default BoltIcon;

import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from "./types";

const BackArrow = ({ color = '#94A3B8', size = 30 }: IconInterface) => {
  return (
    <Svg width={size} height={size} fill="none">
      <Path
        d="M9.13023 18.155C9.3636 18.3782 9.6477 18.5 9.97239 18.5C10.6522 18.5 11.1798 17.9724 11.1798 17.3027C11.1798 16.9679 11.0479 16.6635 10.8146 16.4301L3.71196 9.48985L10.8146 2.5699C11.0479 2.33653 11.1798 2.02198 11.1798 1.69729C11.1798 1.02762 10.6522 0.5 9.97239 0.5C9.6477 0.5 9.3636 0.621759 9.14037 0.844983L1.24635 8.55637C0.962242 8.82018 0.82019 9.14487 0.82019 9.5C0.82019 9.85513 0.962242 10.1595 1.2362 10.4335L9.13023 18.155Z"
        fill={color}
      />
    </Svg>

  );
};

export default BackArrow;

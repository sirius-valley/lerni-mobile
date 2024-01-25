import React from 'react';
import {IconInterface} from "./types";
import Svg, {ClipPath, Defs, G, Path, Rect} from "react-native-svg";

const CheckedIcon = ({color = '#000000', size = 24}: IconInterface) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <G clip-path="url(#clip0_2010_372)">
        <Path d="M10.5002 18.8648L5.63518 13.9998L3.97852 15.6448L10.5002 22.1665L24.5002 8.16648L22.8552 6.52148L10.5002 18.8648Z" fill="#E7E7E7"/>
      </G>
      <Defs>
        <ClipPath id="clip0_2010_372">
          <Rect width="28" height="28" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckedIcon;

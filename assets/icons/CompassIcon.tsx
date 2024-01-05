import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import {IconInterface} from "./types";

const CompassIcon = ({ color = '#307F90', size = 14 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22.0095C6.51705 22.0095 2 17.4924 2 12C2 6.51705 6.50758 2 12 2C17.483 2 22 6.51705 22 12C22 17.4924 17.4924 22.0095 12 22.0095ZM8.28788 16.7443L13.5909 14.358C13.9602 14.197 14.2064 13.9508 14.3674 13.5909L16.7443 8.28788C17.0758 7.50189 16.5076 6.91477 15.7027 7.26515L10.4186 9.64204C10.0587 9.79356 9.8125 10.0303 9.64205 10.4091L7.26515 15.7216C6.93371 16.4886 7.52083 17.0758 8.28788 16.7443ZM12.0095 13.3352C11.2803 13.3352 10.6837 12.7481 10.6837 12.0189C10.6837 11.2898 11.2803 10.6932 12.0095 10.6932C12.7386 10.6932 13.3258 11.2898 13.3258 12.0189C13.3258 12.7481 12.7386 13.3352 12.0095 13.3352Z"
        fill={color}
      />
    </Svg>
  );
};

export default CompassIcon;

import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from './IconInterface';

const PersonCircleIcon = ({ color = '#307F90', size = 14 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.9952 22C17.4761 22 22 17.4761 22 11.9952C22 6.52392 17.4664 2 11.9855 2C6.51426 2 2 6.52392 2 11.9952C2 17.4761 6.52392 22 11.9952 22ZM11.9952 11.6568C10.5839 11.6568 9.44321 10.4679 9.44321 8.87289C9.44321 7.39391 10.5839 6.1566 11.9952 6.1566C13.3968 6.1566 14.5375 7.39391 14.5375 8.87289C14.5375 10.4679 13.3968 11.6665 11.9952 11.6568ZM7.56791 17.0314C7.11358 17.0314 6.90092 16.7318 6.90092 16.3258C6.90092 15.2431 8.50556 12.4495 11.9952 12.4495C15.4751 12.4495 17.0797 15.2431 17.0797 16.3258C17.0797 16.7318 16.8671 17.0314 16.4224 17.0314H7.56791Z"
        fill={color}
      />
    </Svg>
  );
};

export default PersonCircleIcon;

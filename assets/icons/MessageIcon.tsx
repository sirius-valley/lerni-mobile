import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconInterface } from './types';

const MessageIcon = ({ color = '#18BAC8', size = 18 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 16" fill="none" >
      <Path
        d="M3.11762 16C4.06377 16 6.32055 15.05 7.73201 14.0926C7.87936 13.9878 8.00345 13.9504 8.12753 13.9504C8.22835 13.9579 8.32141 13.9654 8.40672 13.9654C13.9983 13.9579 18 11.0182 18 6.97896C18 3.11173 13.9905 0 8.99612 0C4.00172 0 0 3.11173 0 6.97896C0 9.38756 1.50452 11.5418 4.04825 12.8658C4.18785 12.9481 4.22663 13.0603 4.15683 13.195C3.70702 13.9205 2.95476 14.7284 2.64455 15.1099C2.29556 15.5362 2.4972 16 3.11762 16Z"
        fill={color}
      />
    </Svg>

  );
};

export default MessageIcon;

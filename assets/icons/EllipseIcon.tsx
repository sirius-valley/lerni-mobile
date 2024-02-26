import { Circle, Svg } from 'react-native-svg';
import { IconInterface } from './types';

export const EllipseIcon = ({ size, color }: IconInterface) => {
  return (
    <Svg
      width={size ?? '8'}
      height={size ?? '8'}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="4" cy="4" r="4" fill={color ?? 'white'} />
    </Svg>
  );
};

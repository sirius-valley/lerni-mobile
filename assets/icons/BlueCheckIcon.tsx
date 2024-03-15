import { Circle, Svg } from 'react-native-svg';
import { IconInterface } from './types';
import { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const BlueCheckIcon = ({ size, color }: IconInterface) => {
  const theme = useTheme();
  return (
    <Svg
      width={size ?? '15'}
      height={size ?? '15'}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="7.5" cy="7.5" r="7.5" fill={color ?? theme.primary500} />
      <Path
        d="M7.5 15C3.39787 15 0 11.6094 0 7.5C0 3.39787 3.39061 0 7.49274 0C11.6021 0 15 3.39787 15 7.5C15 11.6094 11.6021 15 7.5 15ZM7.5 13.5261C10.8398 13.5261 13.5261 10.8398 13.5261 7.5C13.5261 4.16021 10.8325 1.48112 7.49274 1.48112C4.15295 1.48112 1.48112 4.16021 1.48112 7.5C1.48112 10.8398 4.16021 13.5261 7.5 13.5261ZM6.71588 10.9487C6.44724 10.9487 6.23669 10.8398 6.04066 10.5857L4.3272 8.49468C4.20378 8.34221 4.13843 8.18248 4.13843 8.00823C4.13843 7.64521 4.42159 7.36205 4.77735 7.36205C4.9879 7.36205 5.16215 7.44192 5.3364 7.66699L6.68683 9.38771L9.5547 4.78461C9.70716 4.53775 9.90319 4.42159 10.121 4.42159C10.4622 4.42159 10.7817 4.66118 10.7817 5.01694C10.7817 5.18393 10.6946 5.35818 10.6002 5.51065L7.35479 10.5857C7.20232 10.818 6.97725 10.9487 6.71588 10.9487Z"
        fill="white"
      />
    </Svg>
  );
};

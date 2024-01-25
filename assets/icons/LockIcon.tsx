import Svg, { Path } from 'react-native-svg';
import { IconInterface } from './types';

export const LockIcon = ({ color = '#000C0F', size = 16 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.75182 20H16.2482C17.4219 20 18 19.4669 18 18.2877V12.2383C18 11.1721 17.527 10.631 16.546 10.5422V8.5472C16.546 5.47804 14.3299 4 12 4C9.67007 4 7.45401 5.47804 7.45401 8.5472V10.5664C6.54307 10.6956 6 11.2287 6 12.2383V18.2877C6 19.4669 6.5781 20 7.75182 20ZM9.13577 8.40182C9.13577 6.51994 10.4321 5.48612 12 5.48612C13.5591 5.48612 14.8642 6.51994 14.8642 8.40182V10.526L9.13577 10.5341V8.40182Z"
        fill={color}
      />
    </Svg>
  );
};

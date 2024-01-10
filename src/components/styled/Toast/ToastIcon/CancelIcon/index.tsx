import Svg, { Path } from 'react-native-svg';
import { IconInterface } from '../../../../../../assets/icons/types';

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
  onPress: () => void;
  active?: boolean;
}

export const CancelIcon = ({ color = '#307F90', size = 16 }: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6L9.5 3.205Z"
        fill={color}
      />
    </Svg>
  );
};

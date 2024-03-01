import { Svg } from 'react-native-svg';
import { IconInterface } from './types';
import { Path } from 'react-native-svg';

const ChevronLeftIcon = ({ color, size }: IconInterface) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 9.209}
      height={size ? size : 16}
      viewBox="0 0 10 17"
      fill={color}
    >
      <Path
        d="M7.78221 16.1933C7.98965 16.3918 8.24218 16.5 8.5308 16.5C9.13508 16.5 9.60408 16.031 9.60408 15.4357C9.60408 15.1381 9.48683 14.8675 9.27939 14.6601L2.96597 8.49098L9.27939 2.33991C9.48683 2.13247 9.60408 1.85287 9.60408 1.56426C9.60408 0.968997 9.13508 0.5 8.5308 0.5C8.24218 0.5 7.98965 0.60823 7.79122 0.806652L0.774313 7.66122C0.521776 7.89572 0.395508 8.18433 0.395508 8.5C0.395508 8.81567 0.521776 9.08625 0.765294 9.32976L7.78221 16.1933Z"
        fill={color ?? '#828282'}
      />
    </Svg>
  );
};

export default ChevronLeftIcon;

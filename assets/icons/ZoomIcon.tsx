import Svg, {G, Path} from 'react-native-svg';
import { IconInterface } from './types';

export const ZoomIcon = ({ color = '#307F90', size = 24 }: IconInterface) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0_1431_125)">
                <Path
                    d="M4.85714 14.8571H2V22H9.14286V19.1429H4.85714V14.8571ZM2 9.14286H4.85714V4.85714H9.14286V2H2V9.14286ZM19.1429 19.1429H14.8571V22H22V14.8571H19.1429V19.1429ZM14.8571 2V4.85714H19.1429V9.14286H22V2H14.8571Z"
                    fill={color}/>
            </G>
        </Svg>
    );
};




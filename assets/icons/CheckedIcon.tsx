import React from 'react';
import {IconInterface} from "./types";
import Svg, {Path} from "react-native-svg";

const CheckedIcon = ({color = '#000000', size = 24}: IconInterface) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M9.98361 20.5C9.25574 20.5 8.68525 20.2164 8.1541 19.5545L3.51148 14.1085C3.17705 13.7113 3 13.2953 3 12.8415C3 11.896 3.76721 11.1585 4.73115 11.1585C5.30164 11.1585 5.77377 11.3665 6.2459 11.9527L9.90492 16.4344L17.6754 4.4455C18.0885 3.80256 18.6197 3.5 19.2098 3.5C20.1344 3.5 21 4.12403 21 5.05061C21 5.48554 20.7639 5.93938 20.5082 6.33648L11.7148 19.5545C11.3016 20.1596 10.6918 20.5 9.98361 20.5Z"
                fill={color}/>
        </Svg>
    );
};

export default CheckedIcon;

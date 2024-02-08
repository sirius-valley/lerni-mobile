import { Svg } from "react-native-svg";
import {IconInterface} from "./types";
import { Path } from "react-native-svg";

const ChevronLeftIcon = ({color="#000000", size=20}: IconInterface) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M7.39138 17.2125C7.1969 17.3985 6.96015 17.5 6.68957 17.5C6.12306 17.5 5.68337 17.0603 5.68337 16.5023C5.68337 16.2232 5.79329 15.9696 5.98777 15.7751L11.9066 9.99154L5.98777 4.22492C5.79329 4.03044 5.68337 3.76832 5.68337 3.49775C5.68337 2.93968 6.12306 2.5 6.68957 2.5C6.96015 2.5 7.1969 2.60147 7.38292 2.78749L13.9613 9.21364C14.198 9.43348 14.3164 9.70406 14.3164 10C14.3164 10.2959 14.198 10.5496 13.9697 10.7779L7.39138 17.2125Z"
                fill={color}/>
        </Svg>

    )
}

export default ChevronLeftIcon

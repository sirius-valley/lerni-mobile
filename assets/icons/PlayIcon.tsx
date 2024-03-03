
import {Path, Svg} from "react-native-svg"
import {IconInterface} from "./types"

const PlatIcon = ({size=24,color="#000C0F"}: IconInterface) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22 12L7 21L7 3L22 12Z" fill={color}/>
        </Svg>
    )
}

export default PlatIcon


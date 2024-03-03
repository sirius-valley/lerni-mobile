import {Path, Svg} from "react-native-svg"
import {IconInterface} from "./types"

const PillIcon = ({size=24,color="#000C0F"}: IconInterface) => {
    return (

        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M7.96816 9.33157L14.6702 16.0234L11.3146 19.3785C10.6201 20.079 9.86108 20.5522 9.03753 20.798C8.22014 21.0438 7.40888 21.0653 6.60378 20.8625C5.80482 20.6597 5.07961 20.2326 4.42815 19.5813C3.77669 18.9238 3.34648 18.1925 3.13752 17.3876C2.93471 16.5826 2.95622 15.7714 3.20206 14.9542C3.45403 14.1369 3.92726 13.378 4.62174 12.6775L7.96816 9.33157ZM19.5838 4.41872C20.2291 5.07622 20.6532 5.80747 20.856 6.61245C21.0649 7.41129 21.0465 8.22242 20.8007 9.04583C20.5548 9.86311 20.0816 10.622 19.381 11.3225L16.053 14.6408L9.35097 7.94897L12.6882 4.6215C13.3826 3.92098 14.1386 3.44782 14.956 3.20202C15.7795 2.95623 16.5908 2.93472 17.3897 3.1375C18.1948 3.34028 18.9262 3.76736 19.5838 4.41872Z"
                fill={color}/>
        </Svg>

    )
}

export default PillIcon


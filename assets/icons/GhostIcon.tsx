import { G, Path, Svg } from "react-native-svg";
import { IconInterface } from "./types";

export const GhostIcon = ({size, color}: IconInterface) => {
  return (
    <Svg width="70" height="102" viewBox="0 0 70 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <G id="Group 2747">
        <Path id="Vector" d="M1.53135 35.5829L1.66852 88.6435C1.66852 92.1184 3.06305 95.4561 5.53204 97.9251L5.87495 98.268C8.18392 100.577 11.956 100.577 14.265 98.268C16.5739 95.9591 20.346 95.9591 22.655 98.268C24.9639 100.577 28.7361 100.577 31.045 98.268C33.354 95.9591 37.1261 95.9591 39.435 98.268C41.744 100.577 45.5161 100.577 47.8251 98.268C50.134 95.9591 53.9061 95.9591 56.2151 98.268C58.524 100.577 62.2961 100.577 64.6051 98.268C67.0741 95.799 68.4686 92.4384 68.4686 88.9407V35.4686C68.4686 16.974 53.4717 2 35 2C16.4825 2 1.48563 17.0426 1.53135 35.5601V35.5829Z" stroke={color ? color : "#C6EFFC"} stroke-width="2.28611" stroke-miterlimit="10"/>
        <Path id="Vector_2" d="M25.993 43.013L16.6885 33.7314" stroke={color ? color : "#C6EFFC"} stroke-width="2.28611" stroke-miterlimit="10"/>
        <Path id="Vector_3" d="M16.6885 43.013L25.993 33.7314" stroke={color ? color : "#C6EFFC"} stroke-width="2.28611" stroke-miterlimit="10"/>
        <Path id="Vector_4" d="M53.4265 43.013L44.1221 33.7314" stroke={color ? color : "#C6EFFC"} stroke-width="2.28611" stroke-miterlimit="10"/>
        <Path id="Vector_5" d="M44.1221 43.013L53.4265 33.7314" stroke={color ? color : "#C6EFFC"} stroke-width="2.28611" stroke-miterlimit="10"/>
        <Path id="Vector_6" d="M22 57H48" stroke={color ? color : "#C6EFFC"} stroke-width="2.06386" stroke-miterlimit="10"/>
      </G>
    </Svg>

  )
}
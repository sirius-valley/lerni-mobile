import styled from "styled-components";
import {Dimensions, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

export const StyledCarouselContainer = styled(ScrollView)`
    width: ${Dimensions.get('window').width * 0.95}px;
    gap: 16px;
    display: flex;
    flex-grow: 0;
`

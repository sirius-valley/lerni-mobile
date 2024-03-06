import { useTheme } from "styled-components/native"
import { StyledBox, StyledColumn } from "../../../styled/styles";
import { Dimensions, StyleSheet, ViewStyle } from "react-native";
interface VersusContainerProps {
    children: React.ReactNode;
}

export const VersusContainer = ({children}: VersusContainerProps) => {
    const theme = useTheme();
    const { width } = Dimensions.get('window');
    console.log(width);
    
    return (
        <StyledBox
        
      >
        {/* <StyledBox
        css={{
            borderLeftWidth: width,
            borderRightWidth: width,
            borderLeftColor: theme.primary500,
            borderRightColor: theme.primary500,
            position: 'absolute',
            opacity: 0.5
        }}
        > */}

        {/* </StyledBox> */}
    {children}
        </StyledBox>
      );
    };
import {StyledText} from "../../styled/styles";
import {View} from "react-native";
import React from "react";
import {useTheme} from "styled-components";

interface TabItemProps {
    focused: boolean;
    name: string;
    IconName: any;
}

const TabItem = ({focused,name,IconName}:TabItemProps) => {
    const theme = useTheme()
    return(
        <View
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                height: 50,
                width: 60,
            }}
        >
            <IconName color={focused ? theme.gray100 : theme.primary600} size={32}/>
            <StyledText
                variant={'body3'}
                css={{
                    color: focused ? theme.gray100 : theme.primary600,
                    fontFamily: 'Roboto-Bold',
                }}>
                {name}
            </StyledText>
        </View>
    )
}

export default TabItem;

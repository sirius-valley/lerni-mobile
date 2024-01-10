import React from 'react';
import {Pressable, View} from "react-native";
import CheckedIcon from "../../../../assets/icons/CheckedIcon";
import {useTheme} from "styled-components";

interface CheckboxProps {
    checked: boolean;
    onPress : () => void;
}

const Checkbox = ({checked,onPress}:CheckboxProps) =>{
    const theme = useTheme()
    return(
        <Pressable onPress={onPress}>
            <View style={{
                backgroundColor: checked ? theme.primary500 : theme.primary800,
                borderWidth:2,
                borderStyle:'solid',
                borderColor: theme.primary500,
                borderRadius:8,
                width:42,
                height:42,
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}>
                {checked && <CheckedIcon color={theme.white} size={28}/>}
            </View>
        </Pressable>
    )
}

export default Checkbox;

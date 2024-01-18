import {Pressable} from "react-native";
import {StyledBox, StyledText} from "../../styled/styles";
import {useTheme} from "styled-components";
import React from "react";
import {StyledAnswerButton} from "./styles";

interface AnswerButtonProps {
    answer:string;
    onPress:() => void;
    selected?:boolean;
}

const AnswerButton = ({answer,onPress,selected}:AnswerButtonProps) => {
    const theme = useTheme()
    const status = typeof selected == 'boolean' ? selected ? 'selected' : 'unselected': 'default'
    return(
        <Pressable onPress={onPress}>
            <StyledAnswerButton status={status}>
                <StyledText variant={'body2'} css={{color: theme.white, textAlign:'center'}}>
                    {answer}
                </StyledText>
            </StyledAnswerButton>
        </Pressable>
    )
}

export default AnswerButton;

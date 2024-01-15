import { useState } from "react";
import { StyledColumn } from "../styles";
import { ChoiceContainer, ChoiceMainContainer, ChoiceText } from "./styles"

export interface ChoiceProps {
  status?: "question" | "selected" | "not_selected";
  text?: string; 
  pressed?: boolean;
  onPress?: () => void;
}

export const Choice = ({status, text}: ChoiceProps) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <ChoiceMainContainer status={status}>
      <ChoiceContainer status={status} pressed={isPressed} onPress={() => {setIsPressed(true); console.log(isPressed)}}>
        <ChoiceText status={status} >{text}</ChoiceText>
      </ChoiceContainer>
    </ChoiceMainContainer>
  )
}
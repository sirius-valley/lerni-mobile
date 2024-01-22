import { StyledChoiceContainer, StyledChoiceMainContainer, StyledChoiceText } from './styles';

export interface ChoiceProps {
  status?: 'default' | 'selected' | 'not_selected';
  text?: string;
  id?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const Choice = ({ status = 'default', text, onPress, disabled }: ChoiceProps) => {
  return (
    <StyledChoiceContainer onPress={onPress} status={status} disabled={disabled}>
      <StyledChoiceText status={status}>{text}</StyledChoiceText>
    </StyledChoiceContainer>
  );
};

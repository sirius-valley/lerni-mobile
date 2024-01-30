import { StyledText } from '../../styled/styles';
import { TextBubbleContainer } from '../ChatBubble/styles';
import { useTheme } from 'styled-components';
import { UserTypes } from '../../../utils/constants';
import { Pressable } from 'react-native';
import { useLDispatch } from '../../../redux/hooks';
import { addBlock } from '../../../redux/slice/pill.slice';

interface TextBubbleProps {
  user: UserTypes;
  content: string;
  onPress?: () => void;
}

const TextBubble = ({ user, content, onPress }: TextBubbleProps) => {
  const theme = useTheme();

  const dispatch = useLDispatch();
  const addNewOne = () => {
    dispatch(addBlock({ block: { id: '1', type: 'text', content: 'new one' } }));
  };
  return (
    <Pressable onPress={addNewOne}>
      <TextBubbleContainer user={user}>
        <StyledText
          variant="body2"
          style={{
            color: `${user === 'professor' ? theme.white : theme.primary800}`,
          }}
        >
          {content}
        </StyledText>
      </TextBubbleContainer>
    </Pressable>
  );
};

export default TextBubble;

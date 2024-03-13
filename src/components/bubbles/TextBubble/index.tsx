import { StyledText } from '../../styled/styles';
import { TextBubbleContainer } from '../ChatBubble/styles';
import { useTheme } from 'styled-components';
import { UserTypes } from '../../../utils/constants';

interface TextBubbleProps {
  user: UserTypes;
  content: string;
}

const TextBubble = ({ user, content }: TextBubbleProps) => {
  const theme = useTheme();

  return (
    <TextBubbleContainer user={user}>
      <StyledText
        variant="body2"
        style={{
          color: `${user === 'professor' ? theme.white : theme.primary800}`,
          lineHeight: 20,
        }}
      >
        {content}
      </StyledText>
    </TextBubbleContainer>
  );
};

export default TextBubble;

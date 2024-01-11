import { useTheme } from 'styled-components/native';
import { MessageProps } from '../../../utils/constants';
import { StyledText } from '../styles';
import { MessageContainer } from './MessageContainer/styles';
import { TextBubbleContainer } from './TextBubbleContainer/styles';
import { Avatar } from '../Avatar';
import { ImageBubble } from './ImageBubble/styles';

export const StyledTextBubble = ({
  user = 'professor',
  isLast = true,
  content,
  type,
}: MessageProps) => {
  const theme = useTheme();
  return (
    <MessageContainer user={user}>
      {type === 'text' && (
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
      )}
      {type === 'image' && (
        <ImageBubble
          user={user}
          source={{
            uri: content,
          }}
          style={{
            height: 200,
            width: 300,
          }}
        />
      )}
      {isLast && <Avatar user={user} />}
    </MessageContainer>
  );
};

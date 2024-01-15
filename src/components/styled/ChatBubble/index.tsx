import { useTheme } from 'styled-components/native';
import { MessageProps } from '../../../utils/constants';
import { StyledText } from '../styles';
import { MessageContainer } from './styles';
import { TextBubbleContainer } from './styles';
import { Avatar } from '../Avatar';
import { StyledImageBubble } from './styles';

export const ChatBubble = ({ user = 'professor', isLast = true, content, type }: MessageProps) => {
  const theme = useTheme();

  return (
    <MessageContainer user={user}>
      {(() => {
        switch (type) {
          case 'text':
            return (
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
            );
          case 'image':
            return (
              <StyledImageBubble
                user={user}
                source={{
                  uri: content,
                }}
                style={{
                  height: 200,
                  width: 300,
                }}
              />
            );
          default:
            return null;
        }
      })()}
      {isLast && <Avatar />}
    </MessageContainer>
  );
};

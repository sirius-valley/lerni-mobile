import { useTheme } from 'styled-components/native';
import { MessageProps } from '../../../utils/constants';
import { StyledText } from '../../styled/styles';
import { MessageContainer, TextBubbleContainer } from './styles';
import { Avatar } from '../../common/Avatar';
import ImageBubble from '../ImageBubble';

export const ChatBubble = ({
  user = 'professor',
  isLast = true,
  content,
  type = 'text',
}: MessageProps) => {
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
            return <ImageBubble user={user} url={content} />;
        }
      })()}
      {isLast && <Avatar />}
    </MessageContainer>
  );
};

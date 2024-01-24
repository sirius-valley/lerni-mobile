import { useTheme } from 'styled-components/native';
import { MessageProps } from '../../../utils/constants';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import { MessageContainer } from './styles';
import { TextBubbleContainer } from './styles';
import { Avatar } from '../../common/Avatar';
import { StyledImageBubble } from './styles';
import useZoomImage from '../../../hook/useZoomImage';
import { ZoomIcon } from '../../../../assets/icons/ZoomIcon';
import { Pressable } from 'react-native';
import { ImageBubble } from '../ImageBubble';

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
            return <ImageBubble user={user} content={content} type={type} isLast={isLast} />;
        }
      })()}
      {isLast && <Avatar />}
    </MessageContainer>
  );
};

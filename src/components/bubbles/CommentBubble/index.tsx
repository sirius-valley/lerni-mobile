import { Avatar } from '../../common/Avatar';
import { StyledRow, StyledText } from '../../styled/styles';
import { StyledCommentBubble } from './styles';

interface CommentBubbleProps {
  author: string;
  avatar: string;
  comment: string;
}

export const CommentBubble = ({ author, avatar, comment }: CommentBubbleProps) => {
  return (
    <StyledRow
      style={{
        gap: 4.764,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
      }}
    >
      <Avatar uri={avatar} size={23.822} borderRadius={23.822} />
      <StyledCommentBubble
        style={{
          alignContent: 'flex-start',
        }}
      >
        <StyledText style={{ fontSize: 14, fontFamily: 'Roboto-Bold', fontWeight: '700' }}>
          {author}
        </StyledText>
        <StyledText variant="body2" style={{ color: 'white' }}>
          {comment}
        </StyledText>
      </StyledCommentBubble>
    </StyledRow>
  );
};

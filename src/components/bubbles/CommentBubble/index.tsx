import { Avatar } from '../../common/Avatar';
import { StyledRow, StyledText } from '../../styled/styles';
import { StyledCommentBubble } from './styles';
import { useGetNameColor } from '../../../hooks/useGetNameColor';

interface CommentBubbleProps {
  author: string;
  avatar: string;
  comment: string;
  authorId: string;
}

export const CommentBubble = ({ authorId, author, avatar, comment }: CommentBubbleProps) => {
  const color = useGetNameColor(authorId);
  return (
    <StyledRow
      style={{
        gap: 5,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        width: '90%',
      }}
    >
      <Avatar uri={avatar} size={24} borderRadius={24} />
      <StyledCommentBubble
        style={{
          alignContent: 'flex-start',
          width: '100%',
        }}
      >
        <StyledText
          style={{ fontSize: 14, fontFamily: 'Roboto-Bold', fontWeight: '700', color: color }}
        >
          {author}
        </StyledText>
        <StyledText variant="body2" style={{ color: 'white' }}>
          {comment}
        </StyledText>
      </StyledCommentBubble>
    </StyledRow>
  );
};

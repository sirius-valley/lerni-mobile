import { Avatar } from '../../common/Avatar';
import { StyledRow, StyledText } from '../../styled/styles';
import { StyledCommentBubble } from './styles';
import { useGetNameColor } from '../../../hook/useGetNameColor'

interface CommentBubbleProps {
  author: string;
  avatar: string;
  comment: string;
}

export const CommentBubble = ({ author, avatar, comment }: CommentBubbleProps) => {
  const color = useGetNameColor(author.length);
  return (
    <StyledRow
      style={{
        gap: 4.764,
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        width: '90%',
      }}
    >
      <Avatar uri={avatar} size={23.822} borderRadius={23.822} />
      <StyledCommentBubble
        style={{
          alignContent: 'flex-start',
          width: '100%'
        }}
      >
        <StyledText style={{ fontSize: 14, fontFamily: 'Roboto-Bold', fontWeight: '700', color: color }}>
          {author}
        </StyledText>
        <StyledText variant="body2" style={{ color: 'white' }}>
          {comment}
        </StyledText>
      </StyledCommentBubble>
    </StyledRow>
  );
};

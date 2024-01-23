import { ScrollView } from 'react-native';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import { useGetComments } from '../../../../../hook/useGetComments';
import { CommentBubble } from '../../../../../components/bubbles/CommentBubble';

const Page = () => {
  const theme = useTheme();
  const { comments } = useGetComments();

  return (
    <StyledBox
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
      }}
    >
      <ScrollView>
        <StyledColumn css={{ gap: 24 }}>
          <StyledRow
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {comments?.map((comment) => (
              <CommentBubble
                author={comment.author}
                comment={comment.comment}
                avatar={comment.avatar}
                key={comment.id}
              />
            ))}
          </StyledRow>
        </StyledColumn>
      </ScrollView>
    </StyledBox>
  );
};

export default Page;

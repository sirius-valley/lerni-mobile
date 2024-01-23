import { ScrollView } from 'react-native';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import { useGetComments } from '../../../../../hook/useGetComments';
import { CommentBubble } from '../../../../../components/bubbles/CommentBubble';
import { Header } from '../../../../../components/common/header';

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
      <StyledColumn css={{ gap: 16, marginBottom: 90.65}}>
      <Header title='Comentarios' />
        <ScrollView>
          <StyledColumn
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              paddingTop: 9.53,
              paddingBottom: 9.53,
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
          </StyledColumn>
        </ScrollView>
      </StyledColumn>
    </StyledBox>
  );
};

export default Page;

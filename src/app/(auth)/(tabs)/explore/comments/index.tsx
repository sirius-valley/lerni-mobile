import { ScrollView } from 'react-native';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import { useGetComments } from '../../../../../hook/useGetComments';
import { CommentBubble } from '../../../../../components/bubbles/CommentBubble';
import { Header } from '../../../../../components/common/header';
import { useRef } from 'react';
import { useRouter } from 'expo-router';

const Page = () => {
  const theme = useTheme();
  const router = useRouter();
  const { comments } = useGetComments();
  const scrollViewRef = useRef<ScrollView>(null);

  const handleOnPress = () => {
    router.back();
  }

  return (
    <StyledBox
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
      }}
    >
      <StyledColumn css={{ gap: 16, marginBottom: 60 }}>
        <Header title="Comentarios" onPress={handleOnPress} />
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            setTimeout(() => {
              scrollViewRef.current?.scrollToEnd({ animated: true });
            }, 100);
          }}
        >
          <StyledColumn
            css={{
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 8,
              paddingTop: 10,
              paddingBottom: 10,
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

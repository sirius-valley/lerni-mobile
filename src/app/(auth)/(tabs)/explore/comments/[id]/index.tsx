import { ScrollView } from 'react-native';
import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import { CommentBubble } from '../../../../../../components/bubbles/CommentBubble';
import { Header } from '../../../../../../components/common/header';
import { useRef } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCommentsQuery } from '../../../../../../redux/service/program.service';

const Page = () => {
  const theme = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const { data: comments } = useCommentsQuery(id as string);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleOnPress = () => {
    router.back();
  };

  return (
    <StyledColumn
      css={{ gap: 16, marginBottom: 60, width: '100%', height: '100%', paddingTop: 20 }}
    >
      <Header title="Comentarios" onPress={handleOnPress} />
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => {
          setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
          }, 250);
        }}
        scrollIndicatorInsets={{ right: -30 }}
        contentContainerStyle={{ flexGrow: 1, gap: 8 }}
      >
        {comments?.map((comment) => (
          <CommentBubble
            author={`${comment.student.name} ${comment.student.lastname}`}
            comment={comment.content}
            avatar={comment.student.image}
            key={comment.id}
            authorId={comment.student.id}
          />
        ))}

        {comments?.length === 0 && (
          <StyledColumn
            css={{ height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <StyledText variant={'body2'} color={'gray600'}>
              No hay comentarios
            </StyledText>
          </StyledColumn>
        )}
      </ScrollView>
    </StyledColumn>
  );
};

export default Page;

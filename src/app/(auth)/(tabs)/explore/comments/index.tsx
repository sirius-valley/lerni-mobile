import { ScrollView } from 'react-native';
import { StyledBox, StyledColumn, StyledRow } from '../../../../../components/styled/styles';
import { useTheme } from 'styled-components/native';
import { CommentBubble } from '../../../../../components/bubbles/CommentBubble';
import { Header } from '../../../../../components/common/header';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { useCommentsQuery } from '../../../../../redux/service/pill.service';

const Page = () => {
  const theme = useTheme();
  const router = useRouter();
  const comments = [
    {
      author: {
        name: 'Daniel',
        id: '1c18c118-54ac-4c71-9e08-4e8e2e0c3413',
      },
      comment: 'Make situation as explicitly as possible for alignment.',
      avatar: 'https://i.pravatar.cc/40',
      id: '3d24a5c3-82d4-4e4d-ba6a-ebadf2e2e144',
    },
    {
      author: {
        name: 'Sunnie',
        id: '9dc4c369-91d7-4dd7-b736-7b3477a3dfbb',
      },
      comment:
        'It’s better to keep things simple following the SCQA structure and leave space for follow-up questions.',
      avatar: 'https://i.pravatar.cc/63',
      id: '4a45822b-5218-47ce-b6c5-7a12c409c03d',
    },
    {
      author: {
        name: 'Sunnie',
        id: 'c8b5ff95-606b-4d6b-9e2d-98ef30f1b8f3',
      },
      comment:
        'I usually jump to the key question or answer, especially on Slack because I’ve already thought about the situation and the complication. For my audiences though, I need to practice giving them more context on those. It helps set the stage for good, mutual understanding and lets them feel empowered in responding to the request.',
      avatar: 'https://i.pravatar.cc/61',
      id: '6e2f878c-9b55-4e1d-8104-96c8f4d35f5a',
    },
    {
      author: {
        name: 'Jess',
        id: '7d60f42d-b5c0-4d11-99b1-8a090c6d3161',
      },
      comment:
        'Working entirely remote and async requires a lot of written communication. I learned that often times I include too much “fluff” in my communication. The SCQA framework is clear, concise, and can be instantly applied to daily communication here at Shopify.',
      avatar: 'https://i.pravatar.cc/65',
      id: '8fb17e68-21ab-459b-8d95-06ac7bb9f067',
    },
    {
      author: {
        name: 'Lindsay',
        id: 'c3725585-cf92-4e3e-9090-6c14d51b55f4',
      },
      comment:
        'I probably can shorten my communications with this new structure. It seems like a really great way to organize thoughts and likely elicit responses from others due to readability and comprehension being really clear!',
      avatar: 'https://i.pravatar.cc/75',
      id: 'a7c80f60-774a-45d4-9a99-12e1e0a53f05',
    },
    {
      author: {
        name: 'Endrick Lamar',
        id: 'c7a6cf16-2c96-45f4-97b2-2f8de27a2f1a',
      },
      comment:
        'Descripción lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis ullamcorper mauris, vitae commodo dui efficitur non. Fusce efficitur pulvinar diam vel dictum.',
      avatar: 'https://i.pravatar.cc/65210',
      id: 'c4e51c34-7b4c-45db-8d74-8c0cfae4cb4d',
    },
  ];
  // const comments = useCommentsQuery(id)
  const scrollViewRef = useRef<ScrollView>(null);

  const handleOnPress = () => {
    router.back();
  };

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
          scrollIndicatorInsets={{ right: -30 }}
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
                author={comment.author.name}
                comment={comment.comment}
                avatar={comment.avatar}
                key={comment.id}
                authorId={comment.author.id}
              />
            ))}
          </StyledColumn>
        </ScrollView>
      </StyledColumn>
    </StyledBox>
  );
};

export default Page;

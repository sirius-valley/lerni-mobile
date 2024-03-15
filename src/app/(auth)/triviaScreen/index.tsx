import { useRouter } from 'expo-router';
import { StyledColumn } from '../../../components/styled/styles';
import { LoadingVersus } from '../../../components/trivia/LoadingVersus';

const Page = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push({
      pathname: '/(auth)/triviaScreen/battle',
      params: {
        triviaId: 'triviaId01',
      },
    });
  }, 100);

  return (
    <StyledColumn style={{ width: '100%', height: '100%' }}>
      <LoadingVersus />
    </StyledColumn>
  );
};

export default Page;

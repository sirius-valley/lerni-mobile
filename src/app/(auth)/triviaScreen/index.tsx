import { useRouter } from 'expo-router';
import { StyledColumn } from '../../../components/styled/styles';
import { LoadingVersus } from '../../../components/trivia/LoadingVersus';

const Page = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push('/(auth)/triviaScreen/battle');
  }, 3000);

  return (
    <StyledColumn style={{ width: '100%', height: '100%' }}>
      <LoadingVersus />
    </StyledColumn>
  );
};

export default Page;

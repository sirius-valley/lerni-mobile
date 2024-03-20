import { useRouter } from 'expo-router';
import { StyledColumn } from '../../../../components/styled/styles';
import Button from '../../../../components/styled/Button';

export default function Page() {
  const router = useRouter();
  const programId = 'programNICID';

  return (
    <StyledColumn>
      <Button
        onPress={() =>
          router.push({
            pathname: '/(auth)/triviaScreen/start',
            params: {
              programId,
            },
          })
        }
      >
        Trivia
      </Button>
    </StyledColumn>
  );
}

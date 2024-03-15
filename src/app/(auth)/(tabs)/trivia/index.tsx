import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyledColumn } from '../../../../components/styled/styles';
import Button from '../../../../components/styled/Button';

export default function Page() {
  const router = useRouter();

  return (
    <StyledColumn>
      <Button onPress={() => router.push('/(auth)/triviaScreen')}>Trivia</Button>
    </StyledColumn>
  );
}

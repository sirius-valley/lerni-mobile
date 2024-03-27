import { useRouter } from 'expo-router';
import React from 'react';
import Button from '../../../../components/styled/Button';
import { StyledColumn } from '../../../../components/styled/styles';
export default function Page() {
  const router = useRouter();
  const programId = 'programNICID';

  return (
    <StyledColumn>
      <Button
        onPress={() =>
          router.push({
            pathname: '/(auth)/startTrivia',
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

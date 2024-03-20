import { useRouter } from 'expo-router';
import React from 'react';
import Button from '../../../../components/styled/Button';
import { StyledColumn } from '../../../../components/styled/styles';
import {TriviaHistory} from './TriviaHistory'
export default function Page() {
  const router = useRouter();

  return (
    <StyledColumn
      css={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
        width: '100%',
        height: '100%',
      }}
    >
    <TriviaHistory />
      <Button onPress={() => router.push('/(auth)/triviaScreen')}>Trivia</Button>
    </StyledColumn>
  );
}

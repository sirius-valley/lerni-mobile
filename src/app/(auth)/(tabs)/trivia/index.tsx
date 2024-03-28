import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import Button from '../../../../components/styled/Button';
import { StyledColumn } from '../../../../components/styled/styles';
import { TriviaCardContainer } from '../../../../components/trivia/TriviaCardContainer';
import { TriviaHistory } from '../../../../components/trivia/TriviaHistory';

export default function Page() {
  const router = useRouter();
  const [showTrivias, setShowTrivias] = useState<number[]>();
  const trivias = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(1);

  const handleEndReached = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (!showTrivias) {
      setShowTrivias([trivias[0]]);
    } else {
      setShowTrivias([...showTrivias, trivias[currentPage]]);
    }
  }, [currentPage]);

  return (
    <StyledColumn style={{ justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <TriviaCardContainer />
      <TriviaHistory />
      <Button
        onPress={() =>
          router.push({
            pathname: '/(auth)/startTrivia',
            params: {
              programId: 'triviaMatchId 0',
            },
          })
        }
      >
        Go To Trivia
      </Button>
    </StyledColumn>
  );
}

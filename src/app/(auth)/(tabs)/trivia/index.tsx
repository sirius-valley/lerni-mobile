import { useRouter } from 'expo-router';
import { StyledBox, StyledColumn } from '../../../../components/styled/styles';
import Button from '../../../../components/styled/Button';
import TriviaCard from './components/TriviaCardContainer/TriviaCard/Challenged';
import { FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { TriviaCardContainer } from './components/TriviaCardContainer';
import { TriviaHistory } from './components/TriviaHistory';

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
      <Button onPress={() => router.push('/(auth)/triviaScreen')}>Trivia</Button>
    </StyledColumn>
  );
}

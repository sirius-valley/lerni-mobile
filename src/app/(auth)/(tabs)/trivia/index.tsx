import { useRouter } from 'expo-router';
import { StyledBox, StyledColumn } from '../../../../components/styled/styles';
import Button from '../../../../components/styled/Button';
import TriviaCard from '../../../../components/trivia/TriviaCard';
import { FlatList, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

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
    <StyledColumn>
      <ScrollView style={{ height: 390, width: 342 }}>
        <FlatList
          style={{ height: 390, width: 342 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          data={showTrivias}
          onEndReached={handleEndReached}
          ListFooterComponent={() => <StyledBox></StyledBox>}
          renderItem={(data) => <TriviaCard />}
        />
      </ScrollView>
      <Button onPress={() => router.push('/(auth)/triviaScreen')}>Trivia</Button>
    </StyledColumn>
  );
}
